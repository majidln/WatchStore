import React, { FC, ReactElement } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

interface Props extends TouchableOpacityProps {
  label: string;
  color?: string
}

const Button: FC<Props> = ({ label, color = '#D5A587', style, ...rest }): ReactElement => {
  return (
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: color}, style]} {...rest}>
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48
  },
  label: {
    color: '#fff'
  }
});

export default Button;
