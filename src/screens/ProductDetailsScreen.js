import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>{product.name}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Paragraph>Price: {product.price}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.goBack()}>Go Back</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
