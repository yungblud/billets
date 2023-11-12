import {navigations, screens} from '../../lib/constants';
import {z} from 'zod';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabScreenProps} from '../MainBottomTabNavigation/types';
import {SettingScreenParams} from '../../screens/SettingScreen/types';

export type SettingStackParams = z.infer<
  (typeof navigations)['SettingStack']['params']
>;

export type SettingStackParamList = {
  [screens.Setting.name]: SettingScreenParams;
};

export type SettingStackScreenProps<T extends keyof SettingStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SettingStackParamList, T>,
    MainTabScreenProps<(typeof navigations)['SettingStack']['name']>
  >;
