import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../lib/colors';
import {useSettingScreenNavigation} from './hooks';
import styled, {css} from '@emotion/native';

interface SettingScreenProps {}

const SettingScreen = ({}: SettingScreenProps) => {
  const {top: topInset} = useSafeAreaInsets();
  const navigation = useSettingScreenNavigation();
  return (
    <View
      style={css`
        flex: 1;
        background-color: ${colors.gray.base};
      `}>
      <LoginTop
        onPress={() => {
          navigation.navigate('AuthStack', {
            screen: 'LoginScreen',
            params: {},
          });
        }}
        topInset={topInset}>
        <LoginTopInner>
          <LoginText>로그인</LoginText>
          <Text
            style={css`
              margin-left: auto;
              font-size: 24;
            `}>
            👉
          </Text>
        </LoginTopInner>
      </LoginTop>
      <SettingWrapper>
        <FlatList
          data={[
            {
              id: 0,
              title: '문의하기',
            },
          ]}
          renderItem={info => {
            return (
              <TouchableOpacity
                style={css`
                  padding-vertical: 24;
                  background-color: ${colors.gray.base};
                  padding-horizontal: 24;
                  flex-direction: row;
                  align-items: center;
                `}>
                <Text
                  style={css`
                    color: ${colors.white.base};
                    font-size: 16;
                    font-weight: 500;
                  `}>
                  {info.item.title}
                </Text>
                <View
                  style={css`
                    margin-left: auto;
                  `}>
                  <Text
                    style={css`
                      font-size: 18;
                      font-weight: bold;
                      color: ${colors.white.base};
                    `}>
                    →
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SettingWrapper>
    </View>
  );
};

const LoginTop = styled.Pressable<{topInset: number}>`
  height: ${p => `${80 + p.topInset}px`};
  width: 100%;
  background-color: ${colors.gray.base};
  padding-top: ${p => `${p.topInset}px`};
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #888888;
`;

const LoginTopInner = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 24px;
`;

const SettingWrapper = styled.View`
  flex: 1;
`;

const LoginText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.white.base};
`;

export default SettingScreen;
