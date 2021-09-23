import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

import { ProductType } from './../data';

interface Props {
  product: ProductType,
}

const ProductItem: FC<Props> = ({ product }): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={product.image}
        resizeMode="cover"
        style={[styles.image]} />
      <View style={styles.contentWrapper}>
        <View style={styles.nameWrapper}>
          <Text style={styles.label}>
            {product.brand}
          </Text>
          <Text style={styles.size}>
            {product.size}
          </Text>
        </View>
        <View style={styles.priceWrapper}>
        <Text style={styles.price}>
            {product.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20
  },
  contentWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1
  },
  nameWrapper: {
    justifyContent: 'center'
  },
  label: {
    fontSize: 22,
    fontFamily: 'Avenir'
  },
  size: {
    color: 'darkgray',
    fontSize: 22,
    fontFamily: 'Avenir'
  },
  image: {
    width: 90,
    height: 90
  },
  priceWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  price: {
    fontSize: 22,
    fontFamily: 'Avenir'
  }
});

export default ProductItem;
