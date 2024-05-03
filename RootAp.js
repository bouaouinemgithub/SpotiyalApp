import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootApp from './RootApp';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('RootApp')}
      />
    </View>
  );
}

// function DetailsScreen({ navigation }) {
//   return (
//     <View>
//           <RootApp />
//     </View>
  
//   );
// }

const Stack = createNativeStackNavigator();

function RootAp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RootApp" component={RootApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootAp;
