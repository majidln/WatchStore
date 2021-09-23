/* eslint-disable react/display-name */
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import ListScreen from './screens/List';
import DetailScreen from './screens/Detail';
import HeaderImage from './components/HeaderImage';
import { SlideType } from './data';

export type RootStackParamList = {
  List: undefined;
  Detail: { product: SlideType };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const mainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        height: 80
      },
      headerTitleStyle: {
        fontFamily: 'Avenir'
      },
      headerLeftContainerStyle: {
        paddingHorizontal: 20
      },
      headerRightContainerStyle: {
        paddingHorizontal: 20
      },
      headerTitleAlign: 'center',
      detachPreviousScreen: false
    }}>
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'Watches',
          headerLeft: () => <HeaderImage source={require('./../assets/icons/menu.png')} />,
          headerRight: () => <HeaderImage source={require('./../assets/icons/search.png')} />
        }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
        sharedElements={(route, otherRoute, showing) => {
          const { product } = route.params;
          return [`item.${product.id}.image`, `item.${product.id}.brand`, `item.${product.id}.price`];
        }}
      />
    </Stack.Navigator>
  );
};

export default mainNavigation;
