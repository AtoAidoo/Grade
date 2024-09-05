import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text,Image, View, TouchableOpacity, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useThemeColor } from '@/hooks/useThemeColor';
import OutlinedButton from '@/components/OutlinedButton';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';


const Camera = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [TakenImage, setTakenImage] = useState<string | null>(null);
  const backgroundColor = useThemeColor({}, 'background')
  const textColor = useThemeColor({}, 'text')
  const tintColor = useThemeColor({}, 'tint')
  const previewColor = useThemeColor({}, 'preview')

  const handleClose = () => {
    setPickedImage(null);
    setTakenImage(null);
  };


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
    } else {
      Alert.alert('Image Selection Cancelled', 'You cancelled the image selection process.');
    }
   
  };


  async function takeImageHandler() {
    
    const picture = await ImagePicker.launchCameraAsync ({
        allowsEditing: true,
        quality: 1,
    });

    if (!picture.canceled) {
      setTakenImage(picture.assets[0].uri);
    } else {
      Alert.alert('Photo Capture Cancelled', 'You cancelled the Photo Capture process.');
    }
  }

  let imagePreview = <Text style={{color: textColor}}>No image Selected</Text>
  let buttonShown = 
   <>
  <OutlinedButton title="Pick an image from camera roll" handlepress={pickImage} icon='image-outline' disabled={undefined} />
  <OutlinedButton title='Take picture' handlepress={takeImageHandler} icon={'camera-outline'} disabled={undefined}/>
  </>

  if (TakenImage || pickedImage) {
    imagePreview = <Image style={styles.image}  source={TakenImage || pickedImage ? { uri: TakenImage || pickedImage } : require('../../assets/images/favicon.png')} />

    buttonShown= 
    <View style={styles.confirm}>
      <TouchableOpacity style={[styles.border, {borderColor: tintColor,}]} onPress={() => { 
        router.push('/Sheet')
      }}>
      <Ionicons name='checkmark-sharp' size={30} color={tintColor}  />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.border, {borderColor: tintColor,}]} onPress={handleClose}>
      <AntDesign name='close' size={30} color={tintColor}  />
      </TouchableOpacity>
    </View>
  }
  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <View style={[styles.imagePreview, {backgroundColor: previewColor, borderColor: tintColor}]}>
        {imagePreview}
      </View>
      <View style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center'}}>
     {buttonShown}
     </View>
    </SafeAreaView>
   
      
        
  )
}

export default Camera

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20
  },
  imagePreview:{
    width: '100%',
    height: '70%',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    flex: 1,
    resizeMode: 'contain'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  confirm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  border: {
    borderWidth: 3,
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})