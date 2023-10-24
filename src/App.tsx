import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { globalSelectors } from '@/Redux/Global/selectors';
import { LoaderSpinner } from '@/Components/LoaderSpinner/LoaderSpinner';
import { PagesRouting } from '@/Routing';
import { MainPage } from '@/Pages/Main/MainPage.async';
import { ShopPage } from '@/Pages/Shop/ShopPage.async';
import { ShopDetailPage } from '@/Pages/ShopDetail/ShopDetailPage.async';

function App() {
    const isLoading = useSelector(globalSelectors.isLoading);

    return (
        <Suspense fallback={<LoaderSpinner type="Oval" visible />}>
            {isLoading && <LoaderSpinner type="Oval" visible />}

            <Switch>
                <Route exact path={PagesRouting.MainPages.MainPage}>
                    <MainPage />
                </Route>
                <Route exact path={PagesRouting.MainPages.ShopPage}>
                    <ShopPage />
                </Route>
                <Route exact path={PagesRouting.MainPages.ShopDetail}>
                    <ShopDetailPage />
                </Route>
            </Switch>
        </Suspense>
    );
}

export default App;
