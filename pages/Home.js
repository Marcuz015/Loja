import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/auth';

export default function Home() {
  const { addCarrinho } = useContext(AuthContext);

  const navigation = useNavigation();


  const Roupas = [
    {
      id: 1,
      nome: 'Camisa Slim',
      cor: 'Azul',
      imagem: 'https://static.ferju.com.br/public/ferju/imagens/produtos/camiseta-slim-em-malha-dry-masculina-adulto-1000087016-enfim-marinho-658089696b290.jpg',
      detalhes: 'Uma elegante camisa slim em malha dry, na cor azul. Perfeita para ocasiões casuais ou formais.',
      preco: 'R$ 49.99', // Example price in your currency
    },
    {
      id: 2,
      nome: 'Vestido Floral',
      cor: 'Rosa',
      imagem: 'https://trocadeluxo.com.br/cdn/shop/files/roupas-294_clipped_rev_2.png?v=1682691611',
      detalhes: 'Um encantador vestido floral na cor rosa, ideal para eventos ao ar livre ou encontros especiais.',
      preco: 'R$ 79.99', // Example price in your currency
    },
    {
      id: 3,
      nome: 'Calça Jeans Skinny',
      cor: 'Preto',
      imagem: 'https://17889.cdn.simplo7.net/static/17889/sku/roupas-calca-osmoze-6022100118-cigarrete-hot-skinny-preto-1682191624171.png',
      detalhes: 'Calça jeans skinny preta, proporcionando estilo e conforto. Perfeita para diversas ocasiões casuais.',
      preco: 'R$ 59.99', // Example price in your currency
    },
    {
      id: 4,
      nome: 'Blusa de Tricô',
      cor: 'Cinza',
      imagem: 'https://images.tcdn.com.br/img/img_prod/1044326/blusa_de_frio_gola_boba_vk_leve_agasalho_trico_767_4_91ead57a8602bcf0acc20563095587c2.png',
      detalhes: 'Uma acolhedora blusa de tricô na cor cinza, com gola boba. Ideal para os dias mais frios com muito estilo.',
      preco:'R$ 69.99', // Example price in your currency
    },
    {
      id: 5,
      nome: 'Calça Cargo',
      cor: 'Jeans',
      imagem: 'https://cdn.lojavirtuolpro.com/lojamorgados2/produto/multifotos/hd/20230321014735_9733990267_DZ.png',
      detalhes: 'Calça cargo jeans, perfeita para um visual casual e prático. Bolsos espaçosos e design moderno.',
      preco: 'R$ 54.99', // Example price in your currency
    },
    {
      id: 6,
      nome: 'Camisa Polo',
      cor: 'Vermelha',
      imagem: 'https://static.ferju.com.br/public/ferju/imagens/produtos/media/camisa-polo-masculina-adulto-manga-curta-1000035240-wee-vermelho-6628.jpg',
      detalhes: 'Camisa polo vermelha, uma opção clássica e versátil para um estilo casual e esportivo.',
      preco: 'R$ 39.99', // Example price in your currency
    },
  ];
  

  const groupedRoupas = Roupas.reduce((result, item, index) => {
    if (index % 2 === 0) {
      result.push([item]);
    } else {
      result[result.length - 1].push(item);
    }
    return result;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={groupedRoupas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: row }) => (
          <View style={styles.row}>
            {row.map((item) => (
              <View style={styles.card} key={item.id}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('PaginaItem', { item: item })}
                >
                  <Text style={styles.buttonText}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 4,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    width: '99%',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});