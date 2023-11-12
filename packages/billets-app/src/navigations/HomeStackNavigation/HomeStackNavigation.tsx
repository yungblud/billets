import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {HomeStackParamList} from './types';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

interface HomeStackNavigationProps {}

const HomeStackNavigation = ({}: HomeStackNavigationProps) => {
  return (
    <HomeStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
