import colors from '@app/lib/colors';
import {memo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgProps} from 'react-native-svg';
import styled from 'styled-components/native';
import React from 'react';

const useBottomTabBarIconFillColor = ({isFocused}: {isFocused: boolean}) => {
  const focusedColor = '#ffffff';
  const unfocusedColor = 'rgb(188, 188, 188)';
  const iconFillColor = isFocused ? focusedColor : unfocusedColor;
  return iconFillColor;
};

interface BottomTabBarItemProps {
  title: string;
  isFocused: boolean;
  IconComponent: React.MemoExoticComponent<
    (props: SvgProps) => React.JSX.Element
  >;
  onPress?: () => void;
  onLongPress?: () => void;
}

const BottomTabBarItem = ({
  title,
  isFocused,
  IconComponent,
  onPress,
  onLongPress,
}: BottomTabBarItemProps) => {
  const color = useBottomTabBarIconFillColor({isFocused});
  const {bottom: bottomInset} = useSafeAreaInsets();
  return (
    <TabBarItem
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1.0}
      style={{height: 58 + bottomInset, justifyContent: 'center'}}>
      <IconComponent fill={color} width={20} height={20} />
      <TabBarLabel
        style={{
          color,
        }}>
        {title}
      </TabBarLabel>
    </TabBarItem>
  );
};

const TabBarItem = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray.base};
`;

const TabBarLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
  margin-top: 8px;
`;

export default memo(BottomTabBarItem);
