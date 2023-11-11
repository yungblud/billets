import {useNavigation, useRoute} from '@react-navigation/native';

import type {SettingScreenScreenProps} from './types';

export const useSettingScreenNavigation = () =>
  useNavigation<SettingScreenScreenProps['navigation']>();
export const useSettingScreenRoute = () =>
  useRoute<SettingScreenScreenProps['route']>();
