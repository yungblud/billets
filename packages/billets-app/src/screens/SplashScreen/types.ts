import {z} from 'zod';
import {screens} from '../../lib/constants';
import {SplashStackScreenProps} from '../../navigations/SplashStackNavigation/types';

export type SplashScreenParams = z.infer<(typeof screens)['Splash']['params']>;
export type SplashScreenScreenProps = SplashStackScreenProps<
  (typeof screens)['Splash']['name']
>;
