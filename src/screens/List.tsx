import React, { useRef } from 'react';
import { StatusBar, View, StyleSheet, SafeAreaView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from './../navigation';
import { PRODUCTS, SLIDES } from './../data';
import ProductItem from './../components/ProductItem';
import SlideItem, { SPACING, SLIDE_HEIGHT, SLIDE_WIDTH } from './../components/SlideItem';

type ListScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'List'>;

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
            return <SlideItem
              product={item}
              index={index}
              scrollX={scrollX}
              onSelect={() => navigation.navigate('Detail', { product: item })}
            />;
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
  }
});

export default ListScreen;
