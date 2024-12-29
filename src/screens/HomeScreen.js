import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
  const products = [
    { id: 1, name: 'Glock 19', description: 'Compact pistol', price: '$499', image: require('../assets/glock.jpg') },
    { id: 2, name: 'AR-15', description: 'Semi-automatic rifle', price: '$899', image: require('../assets/ar.jpg') },
    { id: 3, name: 'Mossberg 500', description: 'Pump-action shotgun', price: '$349', image: require('../assets/mossberg.jpg') },
    { id: 4, name: 'AK-47', description: 'Automatic rifle', price: '$1,200', image: require('../assets/ak47.jpg') },
    { id: 5, name: 'Beretta 92FS', description: 'Semi-automatic pistol', price: '$599', image: require('../assets/beretta.jpg') },
    { id: 6, name: 'Remington 870', description: 'Pump-action shotgun', price: '$399', image: require('../assets/remington.jpg') },
    { id: 7, name: 'Colt M4 Carbine', description: 'Lightweight rifle', price: '$1,499', image: require('../assets/m4.jpg') },
    { id: 8, name: 'Desert Eagle', description: 'High-caliber pistol', price: '$1,699', image: require('../assets/eagle.jpg') },
    { id: 9, name: 'SIG Sauer P320', description: 'Modular pistol', price: '$649', image: require('../assets/sig.jpg') },
    { id: 10, name: 'FN SCAR 17', description: 'Battle rifle', price: '$3,299', image: require('../assets/scar.jpg') },
  ];

  return (
    <>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Mamat GunShop" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => navigation.navigate('ProductDetails', { product })}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1f1f1f',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  container: {
    padding: 10,
    backgroundColor: '#121212',
  },
});
