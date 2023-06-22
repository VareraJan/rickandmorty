import { useDispatch } from 'react-redux';

import { type AppDispatch } from '@/app/Providers/StoreProvider';

export const useAppDispatch: () => AppDispatch = useDispatch;
