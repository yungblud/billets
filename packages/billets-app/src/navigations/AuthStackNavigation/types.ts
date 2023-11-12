import {navigations, screens} from '../../lib/constants';
import {z} from 'zod';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackParamList,
  RootStackScreenProps,
} from '../RootStackNavigation/types';
import {LoginScreenScreenParams} from '../../screens/LoginScreen/types';

export type AuthStackParams = z.infer<
  (typeof navigations)['AuthStack']['params']
>;

export type AuthStackParamList = {
  [screens.Login.name]: LoginScreenScreenParams;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
