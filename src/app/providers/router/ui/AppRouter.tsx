import { memo, Suspense, useCallback } from 'react';
import { Route, type RouteProps, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
