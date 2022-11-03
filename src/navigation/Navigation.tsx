import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Coins from '../screens/Coins';
import CoinRates from '../screens/CoinRates';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Coins" component={Coins} />
        <Stack.Screen name="CoinRates" component={CoinRates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
