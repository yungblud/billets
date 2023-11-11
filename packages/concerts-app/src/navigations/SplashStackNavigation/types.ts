import {navigations, screens} from '../../lib/constants';
import {z} from 'zod';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabScreenProps} from '../MainBottomTabNavigation/types';
import {SplashScreenScreenProps} from '../../screens/SplashScreen/types';

export type SplashStackParams = z.infer<
  (typeof navigations)['SettingStack']['params']
>;

export type SplashStackParamList = {
  [screens.Splash.name]: SplashScreenScreenProps;
};

export type SplashStackScreenProps<T extends keyof SplashStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SplashStackParamList, T>,
    MainTabScreenProps<(typeof navigations)['SettingStack']['name']>
  >;
