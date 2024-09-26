import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor'

const AuthLayout = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor =useThemeColor({}, 'text')
  return (
    <Stack screenOptions={{
      contentStyle: {backgroundColor},
      headerTintColor: textColor,
      headerStyle: {backgroundColor}
    }}>
      <Stack.Screen
      name='Login'
      options={{
        headerShown: false,
        
      }}/>
      <Stack.Screen
      name='Signup'
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen
      name='Forget'
      options={{
        headerShown: true,
      }}/>
      <Stack.Screen
      name='Recover'
      options={{
        headerShown: true,
      }}/>
      <Stack.Screen
      name='Startup'
      options={{
        headerShown: false,
      }}/>
      
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})