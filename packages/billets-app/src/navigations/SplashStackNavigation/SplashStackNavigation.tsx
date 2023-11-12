import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import {SplashStackParamList} from './types';

interface SplashStackNavigationProps {}

const SplashStack = createNativeStackNavigator<SplashStackParamList>();

const SplashStackNavigation = ({}: SplashStackNavigationProps) => {
  return (
    <SplashStack.Navigator>
      <SplashStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          orientation: 'portrait',
          header: () => null,
        }}
      />
    </SplashStack.Navigator>
  );
};

export default SplashStackNavigation;
