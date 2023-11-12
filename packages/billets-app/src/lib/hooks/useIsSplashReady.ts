import {atom, useAtom} from 'jotai';

const isSplashReady = atom(false);
export const useIsSplashReady = () => useAtom(isSplashReady);
