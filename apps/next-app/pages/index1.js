// @generated: @expo/next-adapter@4.0.12
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App1 from 'shared/app/App'

export default function App() {
  return (
    
    <View style={styles.container}>
      <App1/>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
