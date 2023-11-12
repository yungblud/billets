import React from 'react';
import colors from '@app/lib/colors';
import styled from '@emotion/native';
import {FC, PropsWithChildren} from 'react';
import {SvgProps} from 'react-native-svg';
import {useBottomTabBarIconFillColor} from './hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const BottomTabBar: {
  Container: FC<PropsWithChildren<{}>>;
  Item: FC<BottomTabBarItemProps>;
} = () => null;

BottomTabBar.Container = ({children}: PropsWithChildren<{}>) => {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </Wrapper>
  );
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

BottomTabBar.Item = ({
  title,
  isFocused,
  IconComponent,
  onPress,
  onLongPress,
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const color = useBottomTabBarIconFillColor({isFocused});
  // eslint-disable-next-line react-hooks/rules-of-hooks
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

const Wrapper = styled.View`
  border-top-color: ${colors.gray.light};
  broder-top-width: 1px;
`;

const InnerWrapper = styled.View`
  flex-direction: row;
`;

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
