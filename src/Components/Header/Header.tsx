import { PagesRouting } from '@/Routing';
import { Link } from '@/Components/Controls/Link/Link';

export function Header() {
   return (
      <div className="container-fluid">
         <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-12 text-center text-lg-right">
               <div className="d-inline-flex align-items-center">
                  <div className="btn-group">
                     <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                        My Account
                     </button>
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
            <div className="col-lg-4">
               <Link to={PagesRouting.MainPages.MainPage} className="text-decoration-none">
                  <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                  <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
               </Link>
            </div>
            <div className="col-lg-4 col-6 text-left">
               <form action="">
                  <div className="input-group">
                     <input type="text" className="form-control" placeholder="Search for products" />
                     <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                           <i className="fa fa-search" />
                        </span>
                     </div>
                  </div>
               </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
               <p className="m-0">Customer Service</p>
               <h5 className="m-0">+012 345 6789</h5>
            </div>
         </div>
      </div>
   );
}
