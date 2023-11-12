import React, { useEffect } from 'react';
import { Button } from '@/Components/Controls/Button/Button';
import { Link } from '@/Components/Controls/Link/Link';
import { PagesRouting } from '@/Routing';
import { useSelector } from 'react-redux';
import { userSelectors } from '@/Redux/User/selectors';
import { useAppDispatch } from '@/Redux/ConfigureStore';
import { userAsyncActions } from '@/Redux/User/asyncActions';
import { EmailType } from '@/Enums/EmailType';
import { CheckEmailTokenResponse } from '@/Api/AppAuth/Responses/CheckEmailTokenResponse';
import { Toasts } from '@/Components/Toast/Toast';
import { globalHistory } from '@/GlobalHistory';

const EmailConfirmationPage = () => {
   const dispatch = useAppDispatch();
   const currentUser = useSelector(userSelectors.currentUser);
   const urlParams = new URLSearchParams(window.location.search);
   const code = urlParams.get('code');

   useEffect(() => {
      if (code) {
         setTimeout(() => {
            dispatch(userAsyncActions.checkEmailToken({ code, emailType: EmailType.ConfirmEmail })).then((response) => {
               const data = response.payload as CheckEmailTokenResponse;
               if (data?.errors?.length) return;

               Toasts.showSuccess({
                  title: 'E-mail',
                  text: 'Congratulations, your email has been successfully verified',
               });
               setTimeout(() => globalHistory.push(PagesRouting.MainPages.MainPage), 4000);
            });
         }, 1000);
      }
   }, []);

   return (
      <section className="vh-100">
         <div className="container h-100 w-50">
            <div className="row h-100 d-flex flex-column justify-content-center align-items-center">
               <div className="w-50">
                  {currentUser ? (
                     <div className="mb-3">
                        <h4>Please confirm your E-mail address!</h4>
                        <p>
                           We sent a confirmation link with activation code to your E-Mail. To continue using the
                           system, you need to confirm your E-Mail address.
                        </p>

                        <Button type="submit" fullWith>
                           Resend E-Mail
                        </Button>
                     </div>
                  ) : (
                     <div className="mb-3">
                        <h4>Please confirm your E-mail address!</h4>
                        <p>
                           The account from this link is not registered. Log in to the correct account or register a new
                           account in the system.
                        </p>

                        <div className="d-flex mr-1">
                           <Link className="w-50 mr-2" to={PagesRouting.AuthorizationPages.LoginPage}>
                              <Button type="submit" fullWith>
                                 Login
                              </Button>
                           </Link>

                           <Link className="w-50 mr-2" to={PagesRouting.AuthorizationPages.RegistrationPage}>
                              <Button type="submit" fullWith>
                                 Register
                              </Button>
                           </Link>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default EmailConfirmationPage;
