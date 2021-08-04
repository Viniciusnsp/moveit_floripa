import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export function TrailDescriptionCarousel({ item, index }) {
  return (
    <View
      style={styles.container}
      key={index}
    >
      <Text
        style={styles.title}>
        {item.title}
      </Text>
      <Text
        style={styles.description}>
        {item.body}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    width: ITEM_WIDTH,
    height: '80%',
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowOpacity: 0.50,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10
  },
  description: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 22
  }
})
