import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../lib/colors';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import {AuthStackParamList} from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  const renderHeader = useCallback((props: NativeStackHeaderProps) => {
    return (
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: colors.gray.base,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            width: '100%',
          }}>
          <Pressable
            onPress={() => props.navigation.goBack()}
            style={{position: 'absolute', left: 12}}>
            <Text style={{fontSize: 18}}>👈</Text>
          </Pressable>
          <Text
            style={{
              color: colors.white.base,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Login
          </Text>
        </View>
      </SafeAreaView>
    );
  }, []);
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: renderHeader,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
