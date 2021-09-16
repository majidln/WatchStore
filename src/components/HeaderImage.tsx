import React, { FC, ReactElement } from 'react';
import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  source: number
}

const HeaderImage: FC<Props> = ({ source, style, ...rest }): ReactElement => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} {...rest}>
      <Image source={source} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 35,
    height: 35
  },
  image: {
    width: 35,
    height: 35
  }
});

export default HeaderImage;
