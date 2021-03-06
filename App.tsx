import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme'; 

import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
        <Dashboard />
    </ThemeProvider>
  )
}