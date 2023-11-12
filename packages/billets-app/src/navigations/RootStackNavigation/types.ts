import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {navigations} from '../../lib/constants';
import {AuthStackParamList} from '../AuthStackNavigation/types';
import {MainTabParamList} from '../MainBottomTabNavigation/types';
import {SplashStackParamList} from '../SplashStackNavigation/types';

export type RootStackParamList = {
  [navigations.MainBottomTab.name]: NavigatorScreenParams<MainTabParamList>;
  [navigations.SplashStack.name]: NavigatorScreenParams<SplashStackParamList>;
  [navigations.AuthStack.name]: NavigatorScreenParams<AuthStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
