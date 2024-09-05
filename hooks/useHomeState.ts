import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import { Alert } from 'react-native';
import * as Sharing from 'expo-sharing';


const useHomeState = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [highlightedFile, setHighlightedFile] = useState(null);
  

 useEffect(() => {
    const listFiles = async () => {
      try {
        const directoryPath = FileSystem.documentDirectory + 'SpaceApp/';
        const directoryContents = await FileSystem.readDirectoryAsync(directoryPath);
        setFiles(directoryContents);
      } catch (error) {
        console.error('Error listing files:', error);
      }
    };

    listFiles();
  }, []);

  const handleFilePress = async (fileName: string) => {
    setHighlightedFile(null)
    try {
      const filePath = FileSystem.documentDirectory + 'SpaceApp/' + fileName;
      const fileContent = await FileSystem.readAsStringAsync(filePath, { encoding: FileSystem.EncodingType.Base64 });
      const wb = XLSX.read(fileContent, { type: 'base64' });
      const ws = wb.Sheets['Sheet1']; // Assuming the worksheet name is 'Sheet1'
      const data = XLSX.utils.sheet_to_json(ws);
      setSelectedFile({ fileName, data });
      setIsModalVisible(true); // Open modal when file is selected
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  const handleFileLongPress = (fileName: string) => {
    setHighlightedFile(fileName);
    
    console.log('File Selected')
    console.log(highlightedFile) // Set highlighted file
  };

  
  

  const handleShare = async () => {
    try {
      const filePath = FileSystem.documentDirectory + 'SpaceApp/' + highlightedFile;
      const fileUri = (await FileSystem.getInfoAsync(filePath)).uri;
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error('Error sharing file:', error);
    }
  };

  const handleDelete = async () => {
    if (!highlightedFile) {
      console.warn('No file selected for deletion');
      return; // Exit function if no file selected
    }
  
    try {
      const filePath = FileSystem.documentDirectory + 'SpaceApp/' + highlightedFile;
      await FileSystem.deleteAsync(filePath);
      setFiles(files.filter((file) => file !== highlightedFile)); // Remove deleted file from list
      setHighlightedFile(null); // Clear highlighted file
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };
  
  const DeleteAlert = () => {
    if (!highlightedFile) {
      return console.log("No Selected File"); // Don't show alert if no file selected
    }
  
    return Alert.alert(
      'Delete File',
      `Do you want to delete "${highlightedFile}"?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Delete', onPress: () => handleDelete() },
      ]
    );
  };

  
 
  const closeModal = () => setIsModalVisible(false); // Function to close modal

  return {
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
  };
};

export default useHomeState;