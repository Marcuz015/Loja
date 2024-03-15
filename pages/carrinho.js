import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/auth';

export default function Carrinho() {
  const { carrinho, setCarrinho } = useContext(AuthContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalItems = carrinho.reduce((total, item) => {
      const numericPrice = Number(item.preco) || 0;
      return isNaN(numericPrice) ? total : total + numericPrice;
    }, 0);
    setTotal(totalItems);
  }, [carrinho]);
  

  const RemoverCarrinho = (index) => {
    setCarrinho((prevCarrinho) => {
      const newCarrinho = [...prevCarrinho];
      newCarrinho.splice(index, 1);
      return newCarrinho;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalItemsText}>{carrinho.length} itens no carrinho</Text>
      <FlatList
  data={carrinho}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
        <Text style={styles.cor}>cor: {item.cor}</Text>
      </View>
      <TouchableOpacity style={styles.removerButton} onPress={() => RemoverCarrinho(index)}>
        <Text style={styles.removerText}>Remover</Text>
      </TouchableOpacity>
    </View>
  )}
/>

<View>
  <Text style={styles.preco}>Preço: R$ {total.toFixed(2)}</Text>
</View>

<TouchableOpacity style={styles.finalizarCompraButton}>
  <Text style={styles.finalizarCompraText}>Finalizar Compra</Text>
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
  totalItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '99%',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14, // Ajuste conforme necessário
  },
  removerButton: {
    backgroundColor: 'red', // Adapte as cores conforme necessário
    padding: 8,
    borderRadius: 15,
  },
  removerText: {
    color: 'white',
  },
  finalizarCompraButton: {
    marginTop: 20,
    backgroundColor: 'black', // Adapte as cores conforme necessário
    padding: 12,
    borderRadius: 15,
    marginBottom: 20
  },
  finalizarCompraText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
