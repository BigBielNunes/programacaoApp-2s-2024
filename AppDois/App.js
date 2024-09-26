import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import quotes from './quotes.json'; // Importa as citações do JSON

const images = {
  "Einstein.jpg": require('./assets/Einstein.jpg'),
  "ayrton.jpg": require('./assets/ayrton.png'),
  "Kobe.jpg": require('./assets/Kobe.png'),
  "Neil.jpg": require('./assets/Neil.png'),
  "Silvio.jpg": require('./assets/Silvio.png')
};

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({});

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]); // Seleciona uma citação aleatória
  };

  return (
    <View style={styles.container}>
      <Button title="Nova Citação" onPress={getRandomQuote} />
      {currentQuote.quote && (
        <View style={styles.quoteContainer}>
          <Image 
            source={images[currentQuote.image]} // Exibe a imagem do autor
            style={styles.authorImage}
          />
          <Text style={styles.quoteText}>{currentQuote.quote}</Text>
          <Text style={styles.authorText}>{currentQuote.author}</Text>
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
    padding: 20,
  },
  quoteContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Faz a imagem circular
  },
  quoteText: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
