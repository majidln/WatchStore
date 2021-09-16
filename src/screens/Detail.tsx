import React from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Animatable from 'react-native-animatable';

import { RootStackParamList } from './../navigation';
import HeaderImage from './../components/HeaderImage';
import Button from './../components/Button';

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const { width, height } = Dimensions.get('screen');
const IMAGE_HEIGHT = height * 0.9;

const DetailScreen = () => {
  const navigation = useNavigation<DetailScreenNavigationProp['navigation']>();
  const route = useRoute<DetailScreenNavigationProp['route']>();

  return (
    <View style={styles.wrapper}>
      <Animatable.View animation={'slideInLeft'} style={styles.backBtn}>
        <HeaderImage onPress={() => navigation.goBack()} source={require('./../../assets/icons/back.png')} />
      </Animatable.View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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
          <Animatable.View animation='slideInUp' style={styles.actionWrapper}>
            <Button label="BUY NOW" />
            <TouchableOpacity style={styles.iconWrapper}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  scroll: {
    flex: 1
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1
  },
  contentWrapper: {
    padding: 20
  },
  brand: {
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '600',
    textAlign: 'left',
    marginTop: 10,
    color: '#020102'
  },
  price: {
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '300',
    textAlign: 'left',
    marginTop: 10,
    color: '#020102'
  },
  desc: {
    marginVertical: 16,
    color: '#020102'
  },
  actionWrapper: {
    flexDirection: 'row'
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderColor: '#E5E5E5',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  }
});

export default DetailScreen;
