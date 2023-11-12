import {z} from 'zod';
import {screens} from '../../lib/constants';
import {HomeStackScreenProps} from '../../navigations/HomeStackNavigation/types';

export type HomeScreenParams = z.infer<(typeof screens)['Home']['params']>;
export type HomeScreenScreenProps = HomeStackScreenProps<
  (typeof screens)['Home']['name']
>;
