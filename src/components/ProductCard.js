import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { Image, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <Card style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Card.Content>
        <Title style={styles.title}>{product.name}</Title>
        <Paragraph style={styles.paragraph}>{product.description}</Paragraph>
        <Paragraph style={styles.paragraph}>{product.price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={onPress}>View Details</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#1f1f1f',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    color: 'white', 
  },
  paragraph: {
    color: 'white', 
  },
});
