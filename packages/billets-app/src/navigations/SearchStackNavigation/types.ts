import {navigations, screens} from '../../lib/constants';
import {z} from 'zod';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainTabScreenProps} from '../MainBottomTabNavigation/types';
import {SearchScreenParams} from '../../screens/SearchScreen/types';

export type SearchStackParams = z.infer<
  (typeof navigations)['SearchStack']['params']
>;

export type SearchStackParamList = {
  [screens.Search.name]: SearchScreenParams;
};

export type SearchStackScreenProps<T extends keyof SearchStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SearchStackParamList, T>,
    MainTabScreenProps<(typeof navigations)['SearchStack']['name']>
  >;
