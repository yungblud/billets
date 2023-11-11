import React from 'react';
import {View} from 'react-native';
import colors from '../../lib/colors';

interface SearchScreenProps {}

const SearchScreen = ({}: SearchScreenProps) => (
  <View style={{flex: 1, backgroundColor: colors.gray.light}} />
);

export default SearchScreen;
