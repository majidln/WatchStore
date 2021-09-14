import React, { useRef } from 'react'
import { StatusBar, View, Text, StyleSheet, SafeAreaView, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from './../navigation'
import { SLIDES } from './../data'

type ListScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'List'>;
const { width, height } = Dimensions.get('screen')

const SPACING = 40
const SLIDE_HEIGHT = height * (2 / 3)
const SLIDE_WIDTH = width - SPACING

const ListScreen = () => {
  const navigation = useNavigation<ListScreenNavigationProp['navigation']>()
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
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Detail', { product: item })}>
              <View style={[
                styles.itemWrapper,
                index === SLIDES.length - 1 ? {} : { marginRight: SPACING / 2 }
              ]}>
                <SharedElement id={`item.${item.id}.image`}>
                  <Animated.Image
                    source={item.image}
                    resizeMode="cover"
                    style={[styles.image, { transform: [{ scale }] }]} />
                </SharedElement>
                <View style={styles.contentWrapper}>
                  <SharedElement id={`item.${item.id}.brand`}>
                    <Text style={styles.brand}>
                      {item.brand}
                    </Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.id}.price`}>
                    <Text style={styles.price}>
                      {item.price}
                    </Text>
                  </SharedElement>
                </View>
              </View>
            </TouchableWithoutFeedback>
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
    backgroundColor: '#fff'
  },
  list: {
    height: SLIDE_HEIGHT
  },
  itemWrapper: {
    width: SLIDE_WIDTH,
    height: SLIDE_HEIGHT,
    overflow: 'hidden',
    zIndex: 1
  },
  image: {
    width: SLIDE_WIDTH,
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
    fontFamily: 'Avenir',
    flex: 1
  },
  price: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Avenir',
    flex: 1
  }
})

export default ListScreen
