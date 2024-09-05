import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import XLSX from 'xlsx';

export const exportArrayToExcel = async (data: unknown[], fileName: string) => {
  try {
    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

    // Convert workbook to base64 string
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    const base64String = excelBuffer.toString('base64');

    // Write the base64 string to a file
    const filePath = FileSystem.cacheDirectory + `${fileName}.xlsx`;
    await FileSystem.writeAsStringAsync(filePath, base64String, { encoding: FileSystem.EncodingType.Base64 });

    // Share the file
    await Sharing.shareAsync(filePath, {
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      dialogTitle: 'Share Excel File'
    });
  } catch (error) {
    console.error('Error exporting data:', error);
    // Handle the error gracefully
  }
};
