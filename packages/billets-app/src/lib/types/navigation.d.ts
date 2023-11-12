import type {RootStackParamList} from '../../navigations/RootStackNavigation/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
