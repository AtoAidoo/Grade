import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/components/SearchBar';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import EmptyState from '@/components/EmptyState';
import * as Sharing from 'expo-sharing';
import TabsLayout from './_layout';
import useHomeState from '@/hooks/useHomeState';
// import { DeleteAlert } from './_layout';


const Home = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');
  const previewColor = useThemeColor({}, 'preview');
  const {
    files,
    setFiles,
    selectedFile,
    setSelectedFile,
    isModalVisible,
    setIsModalVisible,
    highlightedFile,
    setHighlightedFile,
    handleFilePress,
    handleFileLongPress,
    handleShare,
    handleDelete,
    DeleteAlert,
    closeModal,
  } = useHomeState();
  
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.Header, { backgroundColor }]}>
        <Text style={{color: textColor, fontSize: 20, fontWeight: '600'}}>Welcome</Text>
        <View style={[styles.hidden, highlightedFile && { display: 'flex' }]}>
  <TouchableOpacity onPress={handleShare} disabled={!highlightedFile}>
    <MaterialCommunityIcons name="share-variant-outline" size={25} color={textColor} />
  </TouchableOpacity>
  <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={DeleteAlert} disabled={!highlightedFile}>
    <Ionicons name="trash" size={25} color={textColor} />
  </TouchableOpacity>
</View>
      </View>
      <View>
        <FlatList
          data={files}
          renderItem={({ item }) => (
            <TouchableHighlight
              onLongPress={() => handleFileLongPress(item)} // Handle long press
              underlayColor="lightgray"
              onPress={() => handleFilePress(item)}
              
            >
          
              <View style={[styles.fileStyle, {backgroundColor: previewColor,}, highlightedFile === item && { backgroundColor: tintColor }]} >
              <MaterialCommunityIcons name="microsoft-excel" size={24} color="#47a147" />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={[styles.fileName, { color: textColor }]}>{item}</Text>
              </View>
            </View>
          
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item}
          ListHeaderComponent={() => (
            <>
              <SearchBar placeholder={'Search for files'} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, color: textColor }}>Files</Text>
            </>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No files Found"
              subtitle="Create New Files"
              titleSize={20}
              subtitleSize={20}
            />
          )}
        />
        <Modal visible={isModalVisible} >
        <View style={{ backgroundColor, height: '100%' , padding: 20, justifyContent: 'center' }}>
          <View style={{position: 'absolute', top: 0, right: 0, padding: 10}}>
        <TouchableOpacity onPress={closeModal}>
          <AntDesign name='close' size={30} color={textColor}  />
        </TouchableOpacity>
        </View>
          <View style={{alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{color: textColor, fontWeight: 'bold'}}>{selectedFile && selectedFile.fileName}</Text>
        </View>
  {selectedFile && ( // Conditionally render data only if selectedFile exists
    <View style={[styles.tableContainer, {borderColor: tintColor}]}>
      <FlatList
        data={Object.keys(selectedFile.data[0])} // Get header row from first object
        renderItem={({ item }) => (
          <View >
            <Text style={styles.tableHeader}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal={true} // Make header row scroll horizontally
      />
      <FlatList
        data={selectedFile.data}
        renderItem={({ item }) => (
          <View style={[styles.tableRow, {borderColor: tintColor}]}>
            {Object.keys(item).map((key) => (
              <Text key={key} style={[styles.tableData, {color: textColor}]}>{item[key]}</Text>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )}
    
</View>
        </Modal>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  container:{
    height: '100%',
    paddingHorizontal: 10,
},

Header: {
  height: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomColor: '#2e2e2e',
  borderBottomWidth: 1,
  paddingHorizontal: 5,
  marginBottom: 5
},

hidden: {
  flexDirection: 'row',
  display: 'none'
},

fileStyle: {
  borderRadius: 5,
  width: '100%',
  height: 50,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 5,
},

fileName: {
  fontWeight: 'bold',
  marginRight: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
fileType: {
  fontSize: 12,
  color: '#666',
},
tableContainer: {
  borderWidth: 2,
  width: '100%',
  
},
tableHeader: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  flex: 1

},
tableRow: {
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  width: '100%',
  height: 50,
},
tableData: {
  fontSize: 15,
},
});

