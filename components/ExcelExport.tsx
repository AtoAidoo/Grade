// import React, { useState } from 'react';
// import { Button, View } from 'react-native';
// import * as FileSystem from 'expo-file-system';
// import * as Sharing from 'expo-sharing';
// import XLSX from 'xlsx';
// import { DocumentDirectoryPath, writeFile } from 'react-native-fs';

// const ExcelExport = () => {
//   const data = [
//     { name: 'John Doe', age: 30 },
//     { name: 'Jane Smith', age: 25 },
//   ];

//   const handleExport = async () => {
//     try {
//       const workbook = XLSX.utils.book_new();
//       const worksheet = XLSX.utils.json_to_sheet(data);
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

//       const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

//       const filePath = DocumentDirectoryPath + '/myExcelFile.xlsx';
//       await writeFile(filePath, excelBuffer);

//       await Sharing.shareAsync(filePath, {
//         mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//         dialogTitle: 'Share Excel File',
//       });
//     } catch (error) {
//       console.error('Error exporting to Excel:', error);
//     }
//   };

//   return (
//     <View>
//       <Button title="Export to Excel" onPress={handleExport} />
//     </View>
//   );
// };

// export default ExcelExport;

import React, { useState } from 'react';
import { Button, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import XLSX from 'xlsx';

const ExcelExport = () => {
  const data = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
  ];

  const handleExport = async () => {
    try {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });

      // Convert binary data to base64 using a different method
      const base64 = Buffer.from(excelBuffer, 'binary').toString('base64');

      const uri = FileSystem.cacheDirectory + 'myExcelFile.xlsx';
      await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });

      await Sharing.shareAsync(uri, {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        dialogTitle: 'Share Excel File',
      });
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  return (
    <View>
      <Button title="Export to Excel" onPress={handleExport} />
    </View>
  );
};

export default ExcelExport;

