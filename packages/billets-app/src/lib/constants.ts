import {z} from 'zod';

export const navigations = {
  MainBottomTab: {
    name: 'MainBottomTab',
    params: z.object({}),
  },
  HomeStack: {
    name: 'HomeStack',
    params: z.object({}),
  },
  SearchStack: {
    name: 'SearchStack',
    params: z.object({}),
  },
  SettingStack: {
    name: 'SettingStack',
    params: z.object({}),
  },
  SplashStack: {
    name: 'SplashStack',
    params: z.object({}),
  },
  AuthStack: {
    name: 'AuthStack',
    params: z.object({}),
  },
} as const;

export const screens = {
  Home: {
    name: 'HomeScreen',
    params: z.object({}),
  },
  Search: {
    name: 'SearchScreen',
    params: z.object({}),
  },
  Setting: {
    name: 'SettingScreen',
    params: z.object({}),
  },
  Splash: {
    name: 'SplashScreen',
    params: z.object({}),
  },
  Login: {
    name: 'LoginScreen',
    params: z.object({}),
  },
} as const;
