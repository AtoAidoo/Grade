import { Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useEffect } from "react";

export default function Index() {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  setTimeout(() => {
              return router.replace("/Home");
              }, 5000);

  // // Call the function immediately to check folder existence
  // useEffect(() => {
  //   checkSpaceAppFolderExists();
  // }, []);

  // const checkSpaceAppFolderExists = async () => {

  //   const documentDirectory = FileSystem.documentDirectory;
  //   const folderPath = `${documentDirectory}/SpaceApp`;
  //   console.log(documentDirectory)
      
  //     FileSystem.getInfoAsync(folderPath)
  //     .then(info => {
  //       if (info.exists) {
  //         console.log('Folder exists');
  //         setTimeout(() => {
  //           router.replace("/Login");
  //         }, 5000);
  //       } else {
  //         console.log('Folder does not exist');
  //         setTimeout(() => {
  //           return router.replace("/Startup");
  //           }, 5000);
  //   }
  // })
  // };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo size={30} />
    </View>
  );
}