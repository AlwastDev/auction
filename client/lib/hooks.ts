import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { RootState, AppDispatch, AppStore } from '@/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

import { useEffect, useState } from 'react';
export const useDebounce = (value: string | number, delay: number, callback?: (value: string | number) => void) => {
  const [debouncedValue, setDebouncedValue] = useState<string | number>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      callback && callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
};
