import {View} from 'react-native';
import colors from '../../lib/colors';

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => (
  <View style={{flex: 1, backgroundColor: colors.gray.light}} />
);

export default HomeScreen;
