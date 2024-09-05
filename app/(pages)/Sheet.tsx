import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyTable from '@/components/MyTable'
import { SafeAreaView } from 'react-native-safe-area-context'

const Sheet = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <MyTable />
    </SafeAreaView>
  )
}

export default Sheet

const styles = StyleSheet.create({})