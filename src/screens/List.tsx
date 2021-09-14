import React, { useRef } from 'react'
import { StatusBar, View, Text, Image, StyleSheet, SafeAreaView, Animated, Dimensions } from 'react-native'

import { SLIDES } from './../data'
const { width, height } = Dimensions.get('screen')

const SPACING = 40
const SLIDE_HEIGHT = height * (2 / 3)
const SLIDE_WIDTH = width - SPACING
const nishhar = width - ((SLIDE_WIDTH + SPACING) * 2 + SPACING)


const ListScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content"></StatusBar>
      <Animated.FlatList
        data={SLIDES}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        style={styles.list}
        snapToInterval={SLIDE_WIDTH}
        snapToAlignment={'start'}
        pagingEnabled
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1), index, (index + 1)].map(item => item * SLIDE_WIDTH)
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.2, 1]
          })
          return (
            <View style={[
              styles.itemWrapper,
              index === SLIDES.length - 1 ? {} : { paddingRight: SPACING / 2 },
            ]}>
              <Animated.Image
                source={item.image}
                resizeMode="cover"
                style={[styles.image, { transform: [{ scale }] }]} />
              <View style={styles.contentWrapper}>
                <Text style={styles.brand}>
                  {item.brand}
                </Text>
                <Text style={styles.price}>
                  {item.price}
                </Text>
              </View>
            </View>
          )
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  list: {
    flex: 1
  },
  itemWrapper: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    overflow: 'hidden',
    zIndex: 1
  },
  image: {
    width: SLIDE_WIDTH - SPACING,
    height: SLIDE_HEIGHT,
    borderRadius: 1
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 20
  },
  brand: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Avenir'
  },
  price: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Avenir'
  }
})

export default ListScreen
