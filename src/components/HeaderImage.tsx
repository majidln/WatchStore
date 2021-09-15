import React, { FC, ReactElement } from 'react';
import { Image, StyleSheet } from 'react-native';

interface Props {
  source: number
}

const HeaderImage: FC<Props> = ({ source }): ReactElement => {
  return (
    <Image source={source} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 35,
    height: 35
  }
});

HeaderImage.displayName = 'HeaderImage';
export default HeaderImage;
