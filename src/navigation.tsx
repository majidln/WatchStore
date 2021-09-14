import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import ListScreen from './screens/List'
import DetailScreen from './screens/Detail'

const Stack = createSharedElementStackNavigator()

const mainNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params
            return [`item.${item.id}.image`, `item.${item.id}.brand`, `item.${item.id}.price`]
          }}
        />
      </Stack.Navigator>
  )
}

export default mainNavigation
