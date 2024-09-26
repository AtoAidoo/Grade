import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '@/components/Logo'
import { ThemedText } from '@/components/components@example/ThemedText'
import Button from '@/components/Button'
import { router } from 'expo-router'
import * as FileSystem from 'expo-file-system';

const Startup = () => {
    
    
      const checkSpaceAppFolderExists = async () => {
    
        const documentDirectory = FileSystem.documentDirectory;
          const targetDirectory = `${documentDirectory}/SpaceApp`;
          console.log(targetDirectory)
          try {
              await FileSystem.makeDirectoryAsync(targetDirectory, { intermediates: true });
                router.replace("/Login");
              console.log('Folder Successfully Created')
            
          } catch (error) {
              null
              console.log('error, Folder Creation unsuccessful')
          }
          
      };
  return (
      <SafeAreaView style={styles.container}>
          <View style={{alignItems: 'center'}}>
          <Logo size={30} />
              <ThemedText style={{textAlign: 'center'}} type='subtitle'>Welcome to <ThemedText type='subtitleLink'>Grade</ThemedText></ThemedText>
              <ThemedText style={{ textAlign: 'center', paddingBottom: 20 }}> Be apart of our Great community</ThemedText>
                <Image source={require("../../assets/images/study.jpg")} style={{width: '100%', height: '50%', resizeMode: 'cover'}} />
              <ThemedText type='defaultSemiBold' style={{ textAlign: 'center', paddingTop: 20 }}>Get Started. Use Grade for all your multichoice questions</ThemedText>
          </View>
          <Button title={'Get Started'} handlepress={checkSpaceAppFolderExists} />
    </SafeAreaView>
  )
}

export default Startup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
})