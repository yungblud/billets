import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import {SearchStackParamList} from './types';

const SearchStack = createNativeStackNavigator<SearchStackParamList>();

interface SearchStackNavigationProps {}

const SearchStackNavigation = ({}: SearchStackNavigationProps) => (
  <SearchStack.Navigator screenOptions={{header: () => null}}>
    <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
  </SearchStack.Navigator>
);

export default SearchStackNavigation;
