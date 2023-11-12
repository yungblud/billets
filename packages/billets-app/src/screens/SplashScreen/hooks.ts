import {useNavigation, useRoute} from '@react-navigation/native';

import type {SplashScreenScreenProps} from './types';

export const useSplashScreenNavigation = () =>
  useNavigation<SplashScreenScreenProps['navigation']>();
export const useSplashScreenRoute = () =>
  useRoute<SplashScreenScreenProps['route']>();
