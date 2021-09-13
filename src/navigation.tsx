import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import ListScreen from './screens/List'
import DetailScreen from './screens/Detail'

const Stack = createSharedElementStackNavigator()

const mainNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
      </Stack.Navigator>
  )
}

export default mainNavigation
