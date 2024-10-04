import React from 'react';
import { SafeAreaView } from 'react-native';
import PreferencesScreen from './src/components/PreferencesScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PreferencesScreen />
    </SafeAreaView>
  );
};

export default App;
