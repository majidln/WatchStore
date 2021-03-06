import React, { useRef } from 'react';
import { View, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Text, Animated } from 'react-native';
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
const IMAGE_HEIGHT = height * 0.7;

const zoomIn = {
  0: {
    opacity: 0,
    marginTop: 20
  },
  0.5: {
    opacity: 0.5,
    marginTop: 10
  },
  1: {
    opacity: 1,
    marginTop: 0
  }
};

const DetailScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<DetailScreenNavigationProp['navigation']>();
  const route = useRoute<DetailScreenNavigationProp['route']>();

  const imageScale = scrollY.interpolate({
    inputRange: [-0.0002, 0, 40, 40 + 0.00002],
    outputRange: [1, 1, 0.9, 0.9]
  });

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <Animatable.View animation={'slideInLeft'} delay={200} style={styles.backBtn}>
          <HeaderImage onPress={() => navigation.goBack()} source={require('./../../assets/icons/back.png')} />
        </Animatable.View>
        <SharedElement id={`item.${route.params.product.id}.image`}>
          <Animated.Image
            source={route.params.product.image}
            style={{
              width: width,
              height: IMAGE_HEIGHT,
              transform: [{ scaleY: imageScale }]
            }} resizeMode="cover" />
        </SharedElement>
        <Animatable.View easing='linear' animation={zoomIn} delay={350} style={styles.contentWrapper}>
          <Text style={styles.brand}>
            {route.params.product.brand}
          </Text>
          <Text style={styles.price}>
            {route.params.product.price}
          </Text>
          <Text style={styles.desc}>
            {route.params.product.desc}
          </Text>
          <View style={styles.actionWrapper}>
            <Button label="BUY NOW" />
            <TouchableOpacity style={styles.iconWrapper}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scroll: {
    flex: 1
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    top: 50,
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
