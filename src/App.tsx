import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { Route, Switch, useHistory } from 'react-router-dom';
import { globalSelectors } from '@/Redux/Global/selectors';
import { LoaderSpinner } from '@/Components/LoaderSpinner/LoaderSpinner';
import { PagesRouting } from '@/Routing';
import { MainPage } from '@/Pages/Main/MainPage.async';
import { ShopPage } from '@/Pages/Shop/ShopPage.async';
import { ShopDetailPage } from '@/Pages/ShopDetail/ShopDetailPage.async';
import { CartPage } from '@/Pages/Cart/CartPage.async';
import { CheckoutPage } from '@/Pages/Checkout/CheckoutPage.async';
import { ContactPage } from '@/Pages/Contact/ContactPage.async';
import { SignInPage, SignUpPage, EmailConfirmationPage } from '@/Pages/Authorization';
import { useAppDispatch } from '@/Redux/ConfigureStore';
import { GetUserInfoResponse } from '@/Api/AppUser/Responses/GetUserInfoResponse';
import { userAsyncActions } from '@/Redux/User/asyncActions';

Modal.setAppElement('#root');

function App() {
   const history = useHistory();
   const dispatch = useAppDispatch();
   const isLoading = useSelector(globalSelectors.isLoading);

   useEffect(() => {
      dispatch(userAsyncActions.getUserInfo()).then((response) => {
         const user = (response.payload as GetUserInfoResponse)?.user;

         if (!user) {
            history.push(PagesRouting.AuthorizationPages.LoginPage);
         }
      });
   }, []);

   return (
      <Suspense fallback={<LoaderSpinner type="Oval" visible />}>
         {isLoading && <LoaderSpinner type="Oval" visible />}
         {/* <ToastContainerWrapper /> */}

         <Switch>
            {/* Authorization */}
            <Route exact path={PagesRouting.AuthorizationPages.LoginPage}>
               <SignInPage />
            </Route>
            <Route exact path={PagesRouting.AuthorizationPages.RegistrationPage}>
               <SignUpPage />
            </Route>
            <Route exact path={PagesRouting.AuthorizationPages.EmailConfirmationPage}>
               <EmailConfirmationPage />
            </Route>

            {/* Main pages */}
            <Route exact path={PagesRouting.MainPages.MainPage}>
               <MainPage />
            </Route>
            <Route exact path={PagesRouting.MainPages.ShopPage}>
               <ShopPage />
            </Route>
            <Route exact path={PagesRouting.MainPages.ShopDetail}>
               <ShopDetailPage />
            </Route>
            <Route exact path={PagesRouting.MainPages.Cart}>
               <CartPage />
            </Route>
            <Route exact path={PagesRouting.MainPages.Checkout}>
               <CheckoutPage />
            </Route>
            <Route exact path={PagesRouting.MainPages.Contact}>
               <ContactPage />
            </Route>
         </Switch>
      </Suspense>
   );
}

export default App;
