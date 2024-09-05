import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TextInput } from 'react-native';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import OutlinedButton from '@/components/OutlinedButton';
import { router } from 'expo-router';

const Results = () => {
  const textColor = useThemeColor({}, 'text');
  const [FileName, setFileName] = useState('');
  const [tableData, setTableData] = useState([
    { column1: 'Index', column2: 'Scores' },
    { column1: '', column2: '' },
  ]);

  const renderItem = ({ item, index }:{item: any, index: any}) => {
    if (index === 0) {
      return (
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>{item.column1}</Text>
          <View style={styles.separator} />
          <Text style={styles.headerCell}>{item.column2}</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.table, {borderColor: textColor,}]}>
          <Text style={{ color: textColor }}>{item.column1}</Text>
          <View style={[styles.separator, {backgroundColor: textColor,}]} />
          <Text style={{ color: textColor }}>{item.column2}</Text>
        </View>
      );
    }
  };

  const handleSave = async () => {
    try {
      const ws = XLSX.utils.json_to_sheet(tableData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      const wbout = XLSX.write(wb, { type: 'base64', bookType: "xlsx" });

      const fileName = `${FileName}.xlsx`;

      const filePath = await saveFileToSpecificFolder(wbout, fileName, 'SpaceApp');

      if (filePath) {
        Alert.alert('Success', 'File saved successfully!');
      } else {
        Alert.alert('Error', 'Failed to save file.');
      }
    } catch (error) {
      console.error('Error exporting data:', error);
      Alert.alert('Error', 'An error occurred while saving the file.');
    }
    setTimeout(() => {
      router.replace('/Home')
    }, 2000);
  };


  const saveFileToSpecificFolder = async (fileData: string, fileName: string, folderName: string) => {
    try {
      const documentDirectory = FileSystem.documentDirectory;
      const targetDirectory = `${documentDirectory}/${folderName}`;

      await FileSystem.makeDirectoryAsync(targetDirectory, { intermediates: true });

      const filePath = `${targetDirectory}/${fileName}`;
      await FileSystem.writeAsStringAsync(filePath, fileData, { encoding: FileSystem.EncodingType.Base64 });
      console.log(filePath);
      return filePath;
      
    } catch (error) {
      console.error('Error saving file:', error);
      return null; // Indicate failure by returning null
    }
  };
  const handleExport = async () => {
    try {
      const ws = XLSX.utils.json_to_sheet(tableData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      const wbout = XLSX.write(wb, { type: 'base64', bookType: "xlsx" });
      const uri = FileSystem.cacheDirectory + `${FileName}.xlsx`;
      await FileSystem.writeAsStringAsync(uri, wbout, { encoding: FileSystem.EncodingType.Base64 });
      await Sharing.shareAsync(uri, {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        dialogTitle:   
 'My Table',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20,}}>
      <View style={{width: '100%', justifyContent: 'center',height: 30, alignItems: 'center' }}>
      <TextInput
        placeholder='Enter File Name'
        placeholderTextColor={'gray'}
        style={{ color: textColor, fontWeight: 'bold', fontSize: 16 }}
        onChangeText={(text) => setFileName(text)}
        autoFocus={true}
        textAlign='center'
        value={FileName}
      /></View>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <OutlinedButton title="Save to Excel" handlepress={handleSave} icon={'save-outline'} disabled={!FileName.trim()} />
      <OutlinedButton title="Share to Excel" handlepress={handleExport} icon={'share-social-outline'} disabled={!FileName.trim()} />
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    borderWidth: 2,
    alignItems: 'center'
  },
  separator: {
    height: '100%',
    width: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  headerCell: {
    fontWeight: 'bold',
  },
});
