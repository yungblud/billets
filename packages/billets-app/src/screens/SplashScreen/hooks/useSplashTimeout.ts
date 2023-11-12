import {useIsSplashReady} from '@app/lib/hooks/useIsSplashReady';
import {useLayoutEffect} from 'react';
import {useSplashScreenNavigation} from '../hooks';

const useSplashTimeout = ({timeoutDuration}: {timeoutDuration: number}) => {
  const navigation = useSplashScreenNavigation();
  const [, setIsSplashReady] = useIsSplashReady();

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('blur', () =>
      setIsSplashReady(true),
    );
    function navigateToHome() {
      navigation.navigate('MainBottomTab', {
        screen: 'HomeStack',
        params: {},
      });
    }
    const timeoutId = setTimeout(navigateToHome, timeoutDuration);

    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, [navigation, setIsSplashReady, timeoutDuration]);
};

export default useSplashTimeout;
