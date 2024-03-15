import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Image, View, StyleSheet } from 'react-native';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import PaginaItem from '../pages/PaginaItem';
import carrinho from '../pages/carrinho';

const Tab = createBottomTabNavigator();

function Routes() {
  const headerImage = (
    <Image
      source={require('../imgs/jotinha.png')}
      style={styles.headerImage}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'user' : 'user';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'PaginaItem') {
            iconName = focused ? '...' : '...';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'carrinho') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }

          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerTitle: () => headerImage }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ headerTitle: () => headerImage }} />
      <Tab.Screen
        name="PaginaItem"
        component={PaginaItem}
        options={{
          tabBarButton: () => null,
          headerTitle: () => (
            <View style={styles.headerContainer}>
              {headerImage}
            </View>
          ),
        }}
      />
      <Tab.Screen name="carrinho" component={carrinho} options={{ headerTitle: () => headerImage }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 250,
    height: 250,
    marginLeft: 30,
    marginTop: 20
  },
});

export default Routes;
