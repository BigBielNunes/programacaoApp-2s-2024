import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import frases from './frases.json'; // Importa as frases do JSON

const App = () => {
  const [isCracked, setIsCracked] = useState(false);
  const [fortune, setFortune] = useState('');

  const crackCookie = () => {
    setIsCracked(true);
    setFortune(frases[Math.floor(Math.random() * frases.length)]); // Seleciona uma frase aleatória
  };

  const resetCookie = () => {
    setIsCracked(false);
    setFortune(''); // Reseta a fortuna para permitir nova seleção
  };

  return (
    <View style={styles.container}>
      <Image 
        source={isCracked ? require('./assets/biscoitoFechado.png') : require('./assets/biscoitoAberto.png')}
        style={styles.cookieImage}
      />
      {!isCracked ? (
        <Button title="Quebrar Biscoito" onPress={crackCookie} />
      ) : (
        <View style={styles.fortuneContainer}>
          <Text style={styles.fortuneText}>{fortune}</Text>
          <Button title="Nova Frase" onPress={resetCookie} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  cookieImage: {
    width: 200,
    height: 200,
  },
  fortuneContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  fortuneText: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
