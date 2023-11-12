import { PagesRouting } from '@/Routing';
import { Link } from '@/Components/Controls/Link/Link';
import { Button } from '@/Components/Controls/Button/Button';

export function Header() {
   return (
      <header className="container-fluid">
         <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
               <div className="d-inline-flex align-items-center h-100">
                  <a className="text-body mr-3" href="#">
                     About
                  </a>
                  <a className="text-body mr-3" href="#">
                     Help
                  </a>
                  <a className="text-body mr-3" href="#">
                     FAQs
                  </a>
               </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
               <div className="d-inline-flex align-items-center">
                  <div className="btn-group">
                     <Button
                        theme="light"
                        size="small"
                        className="dropdown-toggle"
                        dataAttributes={{
                           'data-toggle': 'dropdown',
                        }}
                     >
                        My Account
                     </Button>
                     <div className="dropdown-menu dropdown-menu-right">
                        <Link
                           to={PagesRouting.AuthorizationPages.LoginPage}
                           text={'Sign in'}
                           className="dropdown-item"
                        />
                        <Link
                           to={PagesRouting.AuthorizationPages.RegistrationPage}
                           text={'Sign up'}
                           className="dropdown-item"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-6">
               <Link to={PagesRouting.MainPages.MainPage} className="text-decoration-none">
                  <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                  <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
               </Link>
            </div>
            <div className="col-lg-6 col-6 text-right">
               <p className="m-0">Customer Service</p>
               <h5 className="m-0">+012 345 6789</h5>
            </div>
         </div>
      </header>
   );
}
