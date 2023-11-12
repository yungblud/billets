import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useIsSplashReady} from '@app/lib/hooks/useIsSplashReady';
import AuthStackNavigation from '@app/navigations/AuthStackNavigation/AuthStackNavigation';
import MainBottomTabNavigation from '@app/navigations/MainBottomTabNavigation/MainBottomTabNavigation';
import SplashStackNavigation from '@app/navigations/SplashStackNavigation/SplashStackNavigation';
import {RootStackParamList} from '@app/navigations/RootStackNavigation/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

interface RootStackNavigationProps {}

const RootStackNavigation = ({}: RootStackNavigationProps) => {
  const [isReady] = useIsSplashReady();
  return (
    <RootStack.Navigator>
      {!isReady && (
        <RootStack.Screen
          name="SplashStack"
          options={{
            orientation: 'portrait',
            header: () => null,
            animation: 'none',
          }}
          component={SplashStackNavigation}
        />
      )}
      <RootStack.Screen
        name="MainBottomTab"
        component={MainBottomTabNavigation}
        options={{
          header: () => null,
          animation: 'none',
          orientation: 'portrait',
        }}
      />
      <RootStack.Screen
        name="AuthStack"
        component={AuthStackNavigation}
        options={{
          header: () => null,
          orientation: 'portrait',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
