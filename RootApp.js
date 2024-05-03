import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './src/screens/FirstScreen';
import HomeScreen from './src/screens/HomeScreen';
const Stack = createNativeStackNavigator();
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#e91e63"
      tabBarAccessibilityLabel='blue'
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >
     
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
       screenOptions={{
          headerShown: false,
        }} initialRouteName="MyTabs">
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
