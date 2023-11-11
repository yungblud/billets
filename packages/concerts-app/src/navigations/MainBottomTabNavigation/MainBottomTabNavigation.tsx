import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import HomeStackNavigation from '../HomeStackNavigation/HomeStackNavigation';
import SearchStackNavigation from '../SearchStackNavigation/SearchStackNavigation';
import {MainTabParamList} from './types';
import BottomTabBar from '../../components/atoms/BottomTabBar';
import {Platform} from 'react-native';
import SettingStackNavigation from '../SettingStackNavigation/SettingStackNavigation';

const MainBottomTab = createBottomTabNavigator<MainTabParamList>();

interface MainBottomTabNavigationProps {}

const MainBottomTabNavigation = ({}: MainBottomTabNavigationProps) => {
  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <BottomTabBar {...props} />,
    [],
  );
  return (
    <MainBottomTab.Navigator
      screenOptions={{
        header: () => null,
      }}
      tabBar={renderTabBar}
      detachInactiveScreens={Platform.OS !== 'android'}>
      <MainBottomTab.Screen name="HomeStack" component={HomeStackNavigation} />
      <MainBottomTab.Screen
        name="SearchStack"
        component={SearchStackNavigation}
      />
      <MainBottomTab.Screen
        name="SettingStack"
        component={SettingStackNavigation}
      />
    </MainBottomTab.Navigator>
  );
};

export default MainBottomTabNavigation;
