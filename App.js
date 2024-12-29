import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
