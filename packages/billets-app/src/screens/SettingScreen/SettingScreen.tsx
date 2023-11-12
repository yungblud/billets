import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import colors from '../../lib/colors';
import {useSettingScreenNavigation} from './hooks';

interface SettingScreenProps {}

const SettingScreen = ({}: SettingScreenProps) => {
  const {top: topInset} = useSafeAreaInsets();
  const navigation = useSettingScreenNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.gray.base}}>
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
          <Text style={{marginLeft: 'auto', fontSize: 24}}>👉</Text>
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
                style={{
                  paddingVertical: 24,
                  backgroundColor: colors.gray.base,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: colors.white.base,
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {info.item.title}
                </Text>
                <View
                  style={{
                    marginLeft: 'auto',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: colors.white.base,
                    }}>
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
