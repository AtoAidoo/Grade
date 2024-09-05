import * as FileSystem from 'expo-file-system';

export const listSavedFiles = async (folderPath: string) => {
  try {
    const files = await FileSystem.readDirectoryAsync(folderPath);
    return files;
  } catch (error) {
    console.error('Error listing files:', error);
    return [];
  }
};
