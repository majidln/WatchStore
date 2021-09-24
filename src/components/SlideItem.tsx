import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Dimensions, Animated } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { SlideType } from './../data';

const { width, height } = Dimensions.get('screen');
export const SPACING = 20;
export const SLIDE_HEIGHT = height * 0.5;
export const SLIDE_WIDTH = width - (2 * SPACING);

interface Props {
  product: SlideType,
  index: number;
  scrollX: Animated.Value;
  onSelect: () => void;
}

const SlideItem: FC<Props> = ({ product, index, scrollX, onSelect }): ReactElement => {
  const inputRange = [(index - 2), index - 1, (index)].map(item => item * SLIDE_WIDTH);
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.3, 1]
  });
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.itemOuterWrapper}>
        <View style={[
          styles.itemWrapper
        ]}>
          <SharedElement id={`item.${product.id}.image`}>
            <Animated.Image
              source={product.image}
              resizeMode="cover"
              style={[styles.image, { transform: [{ scale }] }]} />
          </SharedElement>
          <View style={styles.contentWrapper}>
            <Text style={styles.brand}>
              {product.brand}
            </Text>
            <Text style={styles.price}>
              {product.price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

export default SlideItem;
