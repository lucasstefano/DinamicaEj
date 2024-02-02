import { NavigationRouteContext } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Routes/MainNavigator';

export default function App() {
  return (
    <Navigation/>
  );
}

