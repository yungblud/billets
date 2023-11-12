import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import {SettingStackParamList} from './types';

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

interface SettingStackNavigationProps {}

const SettingStackNavigation = ({}: SettingStackNavigationProps) => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        options={{header: () => null}}
        name="SettingScreen"
        component={SettingScreen}
      />
    </SettingStack.Navigator>
  );
};

export default SettingStackNavigation;
