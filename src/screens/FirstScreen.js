import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function FirstScreen() {
  
  useEffect(() => {
    setTimeout(() =>  navigation.navigate('MyTabs')  , 1000);
  },[])

  return (
    <View>
      <Text>FirstScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})