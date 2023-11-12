import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';
import HomeStackNavigation from '../HomeStackNavigation/HomeStackNavigation';
import SearchStackNavigation from '../SearchStackNavigation/SearchStackNavigation';
import {MainTabParamList} from './types';
import {Platform} from 'react-native';
import SettingStackNavigation from '../SettingStackNavigation/SettingStackNavigation';
import {BottomTabBar} from '@app/components/BottomTabBar';
import {navigations} from '@app/lib/constants';
import HomeIcon from '@app/components/icons/HomeIcon';
import SearchIcon from '@app/components/icons/SearchIcon';
import GenieIcon from '@app/components/icons/GenieIcon';

const MainBottomTab = createBottomTabNavigator<MainTabParamList>();

const switchTitle = (route: string) => {
  switch (route) {
    case navigations.HomeStack.name:
      return 'Home';
    case navigations.SearchStack.name:
      return 'Search';
    case navigations.SettingStack.name:
      return 'My';
    default:
      return '';
  }
};

const switchIconComponent = (route: string) => {
  switch (route) {
    case navigations.HomeStack.name:
      return HomeIcon;
    case navigations.SearchStack.name:
      return SearchIcon;
    case navigations.SettingStack.name:
      return GenieIcon;
    default:
      return HomeIcon;
  }
};

interface MainBottomTabNavigationProps {}

const MainBottomTabNavigation = ({}: MainBottomTabNavigationProps) => {
  const renderTabBar = useCallback(({state, navigation}: BottomTabBarProps) => {
    const tabBarItems = state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          // The `merge: true` option makes sure that the params inside the tab screen are preserved
          navigation.navigate({name: route.name, merge: true} as any);
        }
      };
      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <BottomTabBar.Item
          title={switchTitle(route.name)}
          isFocused={isFocused}
          IconComponent={switchIconComponent(route.name)}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      );
    });

    return <BottomTabBar.Container>{tabBarItems}</BottomTabBar.Container>;
  }, []);

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
