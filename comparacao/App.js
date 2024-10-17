import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [veiculoEscolhido, setVeiculoEscolhido] = useState(null); // Estado para armazenar a escolha do veículo

  const calcularMelhorCombustivel = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina)) {
      const resultadoCalculo = precoAlcool / precoGasolina;
      if (resultadoCalculo <= 0.7) {
        setResultado('Abasteça com Álcool');
      } else {
        setResultado('Abasteça com Gasolina');
      }
    } else {
      setResultado('Por favor, insira valores válidos.');
    }
  };

  return (
    <View style={styles.container}>
      {veiculoEscolhido === null ? (
        <>
          {/* Tela inicial de escolha de veículo */}
          <Text style={styles.title}>Escolha o Veículo</Text>

          <TouchableOpacity style={styles.veiculoEscolha} onPress={() => setVeiculoEscolhido('carro')}>
            <Image source={require('./assets/img/imagemCarro.png')} style={styles.veiculoImagem} />
            <Text>Carro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.veiculoEscolha} onPress={() => setVeiculoEscolhido('moto')}>
            <Image source={require('./assets/img/imagemMoto.png')} style={styles.veiculoImagem} />
            <Text>Moto</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Tela de cálculo após a escolha do veículo */}
          <Text style={styles.title}>Você escolheu: {veiculoEscolhido === 'carro' ? 'Carro' : 'Moto'}</Text>

          {/* Exibe a imagem do veículo escolhido */}
          <Image
            source={
              veiculoEscolhido === 'carro'
                ? require('./assets/img/imagemCarro.png')
                : require('./assets/img/imagemMoto.png')
            }
            style={styles.veiculoImagemGrande}
          />

          {/* Inputs para preços de combustíveis */}
          <TextInput
            style={styles.input}
            placeholder="Preço do litro do Álcool"
            keyboardType="numeric"
            value={alcool}
            onChangeText={setAlcool}
          />

          <TextInput
            style={styles.input}
            placeholder="Preço do litro da Gasolina"
            keyboardType="numeric"
            value={gasolina}
            onChangeText={setGasolina}
          />

          <Button title="Calcular" onPress={calcularMelhorCombustivel} />

          {resultado && <Text style={styles.result}>{resultado}</Text>}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  veiculoEscolha: {
    alignItems: 'center',
    marginBottom: 20,
  },
  veiculoImagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  veiculoImagemGrande: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default App;
