import React from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

import { RootStackParamList } from './../navigation';

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const { width, height } = Dimensions.get('screen');
const IMAGE_HEIGHT = height * 0.6;

const DetailScreen = () => {
  const route = useRoute<DetailScreenNavigationProp['route']>();
  console.log('route is', route.params);

  return (
    <ScrollView style={styles.scroll}>
      <SharedElement id={`item.${route.params.product.id}.image`}>
        <Image
          source={route.params.product.image}
          style={{
            width: width,
            height: IMAGE_HEIGHT,
            backgroundColor: 'red'
          }} resizeMode="cover" />
      </SharedElement>
      <View style={styles.contentWrapper}>
      <Animatable.Text animation="slideInUp" style={styles.brand}>
        {route.params.product.brand}
      </Animatable.Text>
      <Animatable.Text animation="slideInUp" style={styles.price}>
        {route.params.product.price}
      </Animatable.Text>
      <Animatable.Text animation="slideInUp" style={styles.desc}>
        {route.params.product.desc}
      </Animatable.Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  contentWrapper: {
    padding: 20
  },
  brand: {
    fontSize: 24,
    fontFamily: 'Avenir',
    textAlign: 'left',
    marginTop: 10
  },
  price: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'left',
    marginTop: 10
  },
  desc: {
    marginTop: 14
  }
});

export default DetailScreen;
