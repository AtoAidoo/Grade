import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { useThemeColor } from '@/hooks/useThemeColor';
import { TabBarIcon } from '@/components/navigation/TabBarIconIonicons';


const TabsLayout = () => {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor =useThemeColor({}, 'tint');
  
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: true,
      tabBarActiveTintColor: tintColor,
      tabBarInactiveTintColor: textColor,
      tabBarStyle: {
        backgroundColor,
        borderTopWidth: 1,
        borderTopColor: '#5c5a5a'
      },
      headerTintColor: textColor,
      headerStyle: {backgroundColor},
    }}>
      <Tabs.Screen
      name='Home'
      options={{
        title: 'Welcome',
        headerShown: false,
        tabBarIcon: ({color}) => (
          <TabBarIcon name="home" color={color} />
        ),
       
      }}
      />
      <Tabs.Screen
      name='Camera'
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <TabBarIcon name="camera" color={color} />
        ),
      }}
      />

    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})