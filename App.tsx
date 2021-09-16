import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

import MainNavigation from './src/navigation';

export default function App () {
  const [fontsLoaded] = useFonts({
    Avenir: require('./assets/fonts/AvenirLTStd-Black.otf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    );
  }
}
