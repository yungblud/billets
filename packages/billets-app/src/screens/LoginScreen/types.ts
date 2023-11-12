import {z} from 'zod';
import {screens} from '../../lib/constants';
import {AuthStackScreenProps} from '../../navigations/AuthStackNavigation/types';

export type LoginScreenScreenParams = z.infer<
  (typeof screens)['Login']['params']
>;
export type LoginScreenScreenProps = AuthStackScreenProps<
  (typeof screens)['Login']['name']
>;
