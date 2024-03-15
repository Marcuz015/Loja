import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/auth'; // Correct path to your AuthContext

export default function PaginaItem() {
  const route = useRoute();
  const { addCarrinho } = useContext(AuthContext);

  const navigation = useNavigation();

  const item = route.params?.item;
  
  const handleCompra = () => {
    if (item) {
      addCarrinho([item]);
      navigation.navigate('carrinho');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imagem }} style={styles.item} />
      <Text style={styles.nome}>{item?.nome}</Text>
      <Text>cor: {item?.cor}</Text>
      <Text>Detalhes: {item?.detalhes}</Text>
      <TouchableOpacity onPress={handleCompra} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 200,
    height: '50%',
  },
  nome: {
    fontSize: 25,
  },
  addToCartButton: {
    width: '80%',
    backgroundColor: '#000',
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 16,
  },
  addToCartText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});