import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import ListScreen from './screens/List'
import DetailScreen from './screens/Detail'
import { SlideType } from './data'

export type RootStackParamList = {
  List: undefined;
  Detail: { product: SlideType };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>()

const mainNavigation = () => {
  return (
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }}
          sharedElements={(route, otherRoute, showing) => {
            const { product } = route.params
            return [`item.${product.id}.image`, `item.${product.id}.brand`, `item.${product.id}.price`]
          }}
        />
      </Stack.Navigator>
  )
}

export default mainNavigation
