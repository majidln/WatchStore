import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from './../navigation'

type DetailScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = height * (4 / 5)

const DetailScreen = () => {
  const route = useRoute<DetailScreenNavigationProp['route']>()
  console.log('route is', route)

  return (
    <View>
      <SharedElement id={`item.${route.params.product.id}.image`}>
        <Image
          source={route.params.product.image}
          style={{
            width: width,
            height: IMAGE_HEIGHT,
            backgroundColor: 'red'
          }} resizeMode="cover" />
      </SharedElement>
      <SharedElement id={`item.${route.params.product.id}.brand`}>
        <Text style={styles.brand}>
          {route.params.product.brand}
        </Text>
      </SharedElement>
      <SharedElement id={`item.${route.params.product.id}.price`}>
        <Text style={styles.price}>
          {route.params.product.price}
        </Text>
      </SharedElement>
    </View>
  )
}

const styles = StyleSheet.create({
  brand: {
    fontSize: 24,
    fontFamily: 'Avenir',
    textAlign: 'left'
  },
  price: {
    fontSize: 20,
    fontFamily: 'Avenir',
    textAlign: 'left'
  }
})

export default DetailScreen
