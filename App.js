import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootApp from './RootApp';
import RootAp from './Rootap';

export default function App() {
  return (
     <RootApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
