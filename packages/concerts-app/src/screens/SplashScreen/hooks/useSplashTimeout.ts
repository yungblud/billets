import {useIsSplashReady} from '@app/lib/hooks/useIsSplashReady';
import {useCallback, useLayoutEffect} from 'react';
import {useSplashScreenNavigation} from '../hooks';

const useSplashTimeout = ({timeoutDuration}: {timeoutDuration: number}) => {
  const navigation = useSplashScreenNavigation();
  const [, setIsSplashReady] = useIsSplashReady();

  const navigateToHome = useCallback(() => {
    navigation.navigate('MainBottomTab', {
      screen: 'HomeStack',
      params: {},
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsSplashReady(true);
    });
    const timeoutId = setTimeout(navigateToHome, timeoutDuration);

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [navigateToHome, navigation, setIsSplashReady, timeoutDuration]);
};

export default useSplashTimeout;
