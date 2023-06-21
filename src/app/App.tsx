import { Suspense } from 'react';

import { classNames } from '../shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Header } from '@/shared/ui/Header';
import { AppLayout } from '@/shared/ui/Layout';
import { Navbar } from '@/widgets/Navbar';

import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    return (
        <AppLayout>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback="">
                    <Header />
                    <Navbar />
                    <AppRouter />
                </Suspense>
            </div>
        </AppLayout>
    );
};
