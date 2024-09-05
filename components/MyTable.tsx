import OutlinedButton from '@/components/OutlinedButton';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList,StyleSheet, Button, TextInput } from 'react-native';

const MyTable = () => {
    const textColor = useThemeColor({}, 'text');
    const [tableData, setTableData] = useState([
        { column1: 'Questions', column2: 'Answers' },
        { column1: 1, column2: '' },
    ]);
    const [isSaved, setIsSaved] = useState(false);

    const addRow = () => {
        const newRowNumber = tableData.length;
        setTableData([...tableData, { column1: newRowNumber, column2: '' }]);
    };

    const allowedValues = ['A', 'B', 'C', 'D', 'E', 'F'];

  const handleInputChange = (index: any, value: string) => {
    const filteredValue = value.toUpperCase().replace(/[^A-F]/g, '');
    const updatedTableData = [...tableData];
    updatedTableData[index].column2 = filteredValue;
    setTableData(updatedTableData);
  };

 

    const handleSave = () => {
        // Implement save logic here, e.g., storing data in AsyncStorage or sending to a server
        setTimeout(() => {
          router.replace('/Results')
        }, 2000);
        setIsSaved(true);
    };

    const renderItem = ({ item, index }:{
        item: any,
        index: any,
    }) => {
        if (index === 0) {
          return (
            <View style={styles.headerRow}>
              <Text style={styles.headerCell}>{item.column1}</Text>
              <View style={styles.separator} />
              <Text style={styles.headerCell}> {item.column2} </Text>
            </View>
          );
        } else {
          return (
            <View style={[styles.table, {borderColor: textColor,}]}>
         <Text style={{color: textColor}}>{item.column1}</Text>
         <View style={styles.separator} />
            <TextInput
            style={[styles.column2, {color: textColor}]}
            value={item.column2}
            onChangeText={(value) => handleInputChange(index, value)}
            maxLength={1}
            
        />
        </View>
          );
        }
      };



    return (
        <View style={{ flex: 1, padding: 20 ,
            justifyContent: 'center',
            alignItems: 'center',}}>
            <Text style={{color: textColor, fontWeight: 'bold'}}>Answer Sheet</Text>
        <FlatList
            data={tableData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="handled"
            removeClippedSubviews={false}
        />
        {!isSaved && <OutlinedButton title="Add Row" handlepress={addRow} icon={'add'} disabled={undefined} />}
        {isSaved && <Text style={{color: textColor}}>Data Saved</Text>}
        {!isSaved && <OutlinedButton title="Save" handlepress={handleSave} icon={'save-outline'} disabled={undefined} />}
        </View>
    );
    };

const styles = StyleSheet.create({
    table: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        borderWidth: 1,
        width: '100%', 
        height: 50,
     },
     column2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    separator: {
        height: '100%',
        width: 1,
        backgroundColor: 'gray',
      },
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingRight: 22,
        backgroundColor: '#f0f0f0',
      },
      headerCell: {
        fontWeight: 'bold',
      },
})

export default MyTable;


