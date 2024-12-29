import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Gun Shop' }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  );
}
