import React, { useRef } from 'react';
import { StatusBar, View, Text, StyleSheet, SafeAreaView, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from './../navigation';
import { PRODUCTS, SLIDES } from './../data';
import ProductItem from './../components/ProductItem';

type ListScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'List'>;
const { width, height } = Dimensions.get('screen');

const SPACING = 20;
const SLIDE_HEIGHT = height * 0.5;
const SLIDE_WIDTH = width - (2 * SPACING);

const ListScreen = () => {
  const navigation = useNavigation<ListScreenNavigationProp['navigation']>();
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content"></StatusBar>
      <View style={styles.listWrapper}>
        <Animated.FlatList
          data={SLIDES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          snapToInterval={SLIDE_WIDTH}
          pagingEnabled
          renderItem={({ item, index }) => {
            if (item.id === 'key-left') {
              return <View style={{ width: SPACING }}></View>;
            }
            const inputRange = [(index - 2), index - 1, (index)].map(item => item * SLIDE_WIDTH);
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [1, 1.3, 1]
            });
            return (
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { product: item })}>
                <View style={styles.itemOuterWrapper}>
                  <View style={[
                    styles.itemWrapper
                    // index === SLIDES.length - 1 ? {} : { marginRight: SPACING / 2 }
                  ]}>
                    <SharedElement id={`item.${item.id}.image`}>
                      <Animated.Image
                        source={item.image}
                        resizeMode="cover"
                        style={[styles.image, { transform: [{ scale }] }]} />
                    </SharedElement>
                    <View style={styles.contentWrapper}>
                      <Text style={styles.brand}>
                        {item.brand}
                      </Text>
                      <Text style={styles.price}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />
      </View>
      {PRODUCTS.map((product) => {
        return <ProductItem
          key={product.id}
          product={product}
        />;
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listWrapper: {
    height: SLIDE_HEIGHT,
    marginTop: 20
  },
  itemOuterWrapper: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    paddingHorizontal: SPACING / 2
  },
  itemWrapper: {
    width: SLIDE_WIDTH - SPACING,
    height: SLIDE_HEIGHT,
    flex: 1,
    overflow: 'hidden',
    zIndex: 1
  },
  image: {
    width: SLIDE_WIDTH - SPACING,
    height: SLIDE_HEIGHT
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 20
  },
  brand: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Avenir',
    flex: 1
  },
  price: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Avenir',
    flex: 1
  }
});

export default ListScreen;
