import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

// Função que retorna a jogada aleatória do aplicativo
const gerarJogada = () => {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const indice = Math.floor(Math.random() * 3);
  return opcoes[indice];
};

// Função que determina o vencedor do jogo
const determinarVencedor = (usuario, app) => {
  if (usuario === app) {
    return 'Empate!';
  }
  if (
    (usuario === 'pedra' && app === 'tesoura') ||
    (usuario === 'tesoura' && app === 'papel') ||
    (usuario === 'papel' && app === 'pedra')
  ) {
    return 'Você ganhou!';
  }
  return 'Você perdeu!';
};

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const jogar = (usuarioEscolha) => {
    const appEscolha = gerarJogada();
    setEscolhaUsuario(usuarioEscolha);
    setEscolhaApp(appEscolha);
    const vencedor = determinarVencedor(usuarioEscolha, appEscolha);
    setResultado(vencedor);
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>

      <View style={styles.opcoes}>
        <TouchableOpacity onPress={() => jogar('pedra')}>
          <Image source={require('./assets/img/imagemPedra.png')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('papel')}>
          <Image source={require('./assets/img/imagemPapel.png')} style={styles.imagem} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('tesoura')}>
          <Image source={require('./assets/img/imagemTesoura.png')} style={styles.imagem} />
        </TouchableOpacity>
      </View>

      {escolhaUsuario && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>Sua escolha: {escolhaUsuario}</Text>
          <Text style={styles.textoResultado}>Escolha do app: {escolhaApp}</Text>
          <Text style={styles.textoResultado}>{resultado}</Text>
        </View>
      )}

      {escolhaUsuario && (
        <Button title="Jogar Novamente" onPress={reiniciarJogo} />
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
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
