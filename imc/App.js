import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

// Import images
import abaixoPesoImg from './assets/images/abaixo_peso.jpg';
import pesoNormalImg from './assets/images/peso_normal.jpg';
import sobrepesoImg from './assets/images/sobrepeso.jpg';
import obesidadeImg from './assets/images/obesidade.jpg';
import obesidadeGraveImg from './assets/images/obesidade_grave.jpg';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [imagem, setImagem] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(2));

      if (imc < 18.5) {
        setClassificacao('Abaixo do peso');
        setImagem(abaixoPesoImg);
      } else if (imc >= 18.5 && imc < 24.9) {
        setClassificacao('Peso normal');
        setImagem(pesoNormalImg);
      } else if (imc >= 25 && imc < 29.9) {
        setClassificacao('Sobrepeso');
        setImagem(sobrepesoImg);
      } else if (imc >= 30 && imc < 39.9) {
        setClassificacao('Obesidade');
        setImagem(obesidadeImg);
      } else {
        setClassificacao('Obesidade grave');
        setImagem(obesidadeGraveImg);
      }
    } else {
      alert('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/balanca.png' }} 
        style={styles.image} 
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {resultado ? (
        <Text style={styles.result}>
          IMC: {resultado} - {classificacao}
        </Text>
      ) : null}
      {imagem && <Image source={imagem} style={styles.classificacaoImage} />}
      <Image 
        source={{ uri: 'https://example.com/fita_metrica.png' }} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderRadius:20,
    borderColor: 'blue',
    borderWidth: 2,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  classificacaoImage: {
    width: 190, 
    height: 500, 
    marginTop: 40,
  },
});

export default App;
