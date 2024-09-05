import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const PagesLayout = () => {
  const [isSaved, setIsSaved] = useState(false)
  const backgroundColor = useThemeColor({}, 'background');
  const textColor =useThemeColor({}, 'text');
  const tintColor =useThemeColor({}, 'tint');

  const handleSave = () => {
    // Implement save logic here, e.g., storing data in AsyncStorage or sending to a server
    setTimeout(() => {
      router.replace('/Home')
    }, 2000);
    setIsSaved(true);
  }
    
  return (
    <Stack screenOptions={{
      contentStyle: {backgroundColor},
      headerTintColor: textColor,
      headerStyle: {backgroundColor}
    }}>
      <Stack.Screen
      name='Sheet'
      options={{
        headerShown: true,
      }}/>
      <Stack.Screen
      name='Results'
      options={{
        headerShown: true,
        headerRight: () => {
          return <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {router.replace('/Camera')}}>
            <AntDesign name='plus' size={30} color={textColor} />
          </TouchableOpacity>
          </View>
        }
      }}/>
      
    </Stack>
  )
}

export default PagesLayout

const styles = StyleSheet.create({})