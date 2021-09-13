import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ListScreen = () => {
  const navigation = useNavigation()

  return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate({ key: 'DetailScreen' })}>
              <Text>
                  In list screen
              </Text>
            </TouchableOpacity>
        </View>
  )
}

export default ListScreen
