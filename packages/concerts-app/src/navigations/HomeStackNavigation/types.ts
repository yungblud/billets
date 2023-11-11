import {navigations, screens} from '../../lib/constants';
import {z} from 'zod';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabScreenProps} from '../MainBottomTabNavigation/types';
import {HomeScreenParams} from '../../screens/HomeScreen/types';

export type HomeStackParams = z.infer<
  (typeof navigations)['HomeStack']['params']
>;

export type HomeStackParamList = {
  [screens.Home.name]: HomeScreenParams;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    MainTabScreenProps<(typeof navigations)['HomeStack']['name']>
  >;
