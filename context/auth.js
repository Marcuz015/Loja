import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [carrinho, setCarrinho] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // Initialize total price to 0
  const navigation = useNavigation();

  const addCarrinho = (newItem) => {
    setCarrinho((prevCarrinho) => {
      const numericPrice = Number(newItem.preco) || 0;
      const newCarrinho = prevCarrinho.concat(newItem);
      const newTotalPrice = totalPrice + numericPrice;
      setTotalPrice(newTotalPrice);
      return newCarrinho;
    });
  };

  const RemoverCarrinho = (index) => {
    setCarrinho((prevCarrinho) => {
      const removedItem = prevCarrinho[index];
      const numericPrice = Number(removedItem.preco) || 0;
      const newCarrinho = [...prevCarrinho];
      newCarrinho.splice(index, 1);
      const newTotalPrice = totalPrice - numericPrice;
      setTotalPrice(newTotalPrice >= 0 ? newTotalPrice : 0);
      return newCarrinho;
    });
  };

  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((item) => {
      total += Number(item.preco) || 0;
    });
    return total;
  };

  return (
    <AuthContext.Provider value={{ user, carrinho, addCarrinho, setCarrinho, RemoverCarrinho, calcularTotal, totalPrice }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;