import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import { useRoute } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')
const IMAGE_HEIGHT = height * (4 / 5)

const DetailScreen = () => {
  const route = useRoute();
  console.log('route is', route)

  return (
    <View>
      <SharedElement id={`item.${route.params.item.id}.image`}>
        <Image
          source={route.params.item.image}
          style={{
            width: width,
            height: IMAGE_HEIGHT,
            backgroundColor: 'red'
          }} resizeMode="cover" />
      </SharedElement>
      <SharedElement id={`item.${route.params.item.id}.brand`}>
        <Text style={styles.brand}>
          {route.params.item.brand}
        </Text>
      </SharedElement>
      <SharedElement id={`item.${route.params.item.id}.price`}>
        <Text style={styles.price}>
          {route.params.item.price}
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
