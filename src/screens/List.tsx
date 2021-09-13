import React, { useRef } from 'react'
import { StatusBar, View, Text, Image, StyleSheet, SafeAreaView, Animated, Dimensions } from 'react-native'

import { SLIDES } from './../data'
const { width, height } = Dimensions.get('screen')

const SPACING = 40
const SLIDE_HEIGHT = height * (2 / 3)
const SLIDE_WIDTH = width - SPACING

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
              pagingEnabled
              renderItem={({ item, index }) => {
                const inputRange = [(index - 1), index, (index + 1)].map(item => item * SLIDE_WIDTH)
                const scale = scrollX.interpolate({
                  inputRange,
                  outputRange: [1, 1.01, 1]
                })
                return (
                  <View style={[styles.itemWrapper, index === SLIDES.length - 1 ? {} : { paddingRight: SPACING / 2 }]}>
                    <Animated.Image source={item.image} resizeMode="contain"
                    style={[styles.image, { transform: [{ scale }] }]} />
                    <View style={styles.contentWrapper}>
                      <Text>
                        {item.brand}
                      </Text>
                      <Text>
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
    height: SLIDE_HEIGHT
  },
  image: {
    width: '100%',
    height: SLIDE_HEIGHT
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 20
  }
})

export default ListScreen
