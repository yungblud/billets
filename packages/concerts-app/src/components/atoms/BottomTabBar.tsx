import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {memo, useMemo} from 'react';
import styled from 'styled-components/native';
import {navigations} from '@app/lib/constants';
import SearchIcon from '@app/components/icons/SearchIcon';
import HomeIcon from '@app/components/icons/HomeIcon';
import GenieIcon from '@app/components/icons/GenieIcon';
import BottomTabBarItem from './BottomTabBarItem';

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

interface Props extends BottomTabBarProps {}

const BottomTabBar = ({state, navigation}: Props) => {
  const tabBarItems = useMemo(() => {
    return state.routes.map((route, index) => {
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
        <BottomTabBarItem
          title={switchTitle(route.name)}
          isFocused={isFocused}
          IconComponent={switchIconComponent(route.name)}
          onPress={onPress}
          onLongPress={onLongPress}
        />
      );
    });
  }, [navigation, state.index, state.routes]);

  return (
    <Wrapper>
      <InnerWrapper>{tabBarItems}</InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  border-top-color: colors.gray.light;
  broder-top-width: 1px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
`;

export default memo(BottomTabBar);
