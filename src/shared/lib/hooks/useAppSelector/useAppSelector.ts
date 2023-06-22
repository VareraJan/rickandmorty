import { useSelector, type TypedUseSelectorHook } from 'react-redux';

import { type RootState } from '@/app/Providers/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
