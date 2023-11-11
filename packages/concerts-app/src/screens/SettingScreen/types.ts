import {z} from 'zod';
import {screens} from '../../lib/constants';
import {SettingStackScreenProps} from '../../navigations/SettingStackNavigation/types';

export type SettingScreenParams = z.infer<
  (typeof screens)['Setting']['params']
>;
export type SettingScreenScreenProps = SettingStackScreenProps<
  (typeof screens)['Setting']['name']
>;
