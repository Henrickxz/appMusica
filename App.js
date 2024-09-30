import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Rotas from './components/Rotas';

function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#121212', /* Fundo escuro */
    color: '#00FF00', /* Verde para o texto das músicas */
    margin: 0,
    padding: 20,
  },
  h1: {
    textAlign: 'center',
    color: '#00FF00', /* Verde para o título */
  },
  songList: {
    listStyleType: 'none',
    padding: 0,
  },
  songItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333', /* Linha separadora */
  },
});
