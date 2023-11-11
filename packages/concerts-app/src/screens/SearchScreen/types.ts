import {z} from 'zod';
import {screens} from '../../lib/constants';
import {SearchStackScreenProps} from '../../navigations/SearchStackNavigation/types';

export type SearchScreenParams = z.infer<(typeof screens)['Search']['params']>;
export type SearchScreenScreenProps = SearchStackScreenProps<
  (typeof screens)['Search']['name']
>;
