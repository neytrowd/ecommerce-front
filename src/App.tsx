import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { globalSelectors } from '@/Redux/Global/selectors';
import { LoaderSpinner } from '@/Components/LoaderSpinner/LoaderSpinner';
import { PagesRouting } from '@/Routing';
import { Header } from '@/Components/Header/Header';
import { Navbar } from '@/Components/Navbar/Navbar';
import { Footer } from '@/Components/Footer/Footer';

function App() {
    const isLoading = useSelector(globalSelectors.isLoading);

    return (
        <Suspense fallback={<LoaderSpinner type="Oval" visible />}>
            {isLoading && <LoaderSpinner type="Oval" visible />}

            <Switch>
                <Route exact path={PagesRouting.MainPages.MainPage}>
                    <Header />
                    <Navbar />
                    <Footer />
                </Route>
            </Switch>
        </Suspense>
    );
}

export default App;
