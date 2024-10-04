import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importando o Picker da nova biblioteca
import Slider from '@react-native-community/slider'; // Importando o Slider da nova biblioteca

const PreferencesScreen = () => {
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  // Definindo as cores com base no tema selecionado e no modo noturno
  const colors = {
    claro: {
      background: isNightMode ? '#333' : '#fff',
      text: isNightMode ? '#fff' : '#000',
      pickerBackground: isNightMode ? '#444' : '#f0f0f0',
    },
    escuro: {
      background: isNightMode ? '#333' : '#333',
      text: '#fff',
      pickerBackground: '#444',
    },
    automatico: {
      background: isNightMode ? '#333' : '#fff',
      text: isNightMode ? '#fff' : '#000',
      pickerBackground: isNightMode ? '#444' : '#f0f0f0',
    },
  };

  const currentColors = colors[theme.toLowerCase()];

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.title, { fontSize, color: currentColors.text }]}>Configurações de Preferências</Text>

      <Text style={[styles.label, { fontSize, color: currentColors.text }]}>Tema:</Text>
      <Picker
        selectedValue={theme}
        style={[styles.picker, { backgroundColor: currentColors.pickerBackground }]}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      <Text style={[styles.label, { fontSize, color: currentColors.text }]}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        step={1}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        style={styles.slider}
      />

      <Text style={[styles.label, { fontSize, color: currentColors.text }]}>Modo Noturno: {isNightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={isNightMode}
        onValueChange={(value) => setIsNightMode(value)}
      />

      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
    marginVertical: 20,
  },
});

export default PreferencesScreen;
