import React from 'react';
import { useRouting } from '@/Hooks';
import { Link } from '@/Components/Controls/Link/Link';
import { PagesRouting } from '@/Routing';
import cn from 'classnames';

export function Navbar() {
   const { currentPage } = useRouting();

   return (
      <div className="container-fluid bg-dark mb-30">
         <div className="row px-xl-5">
            <div className="col-lg-12">
               <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                  <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                     <div className="navbar-nav mr-auto py-0">
                        <Link
                           text={'Home'}
                           to={PagesRouting.MainPages.MainPage}
                           className={cn('nav-item nav-link', {
                              ['active']: currentPage == PagesRouting.MainPages.MainPage,
                           })}
                        />
                        <Link
                           text={'Shop'}
                           to={PagesRouting.MainPages.ShopPage}
                           className={cn('nav-item nav-link', {
                              ['active']: currentPage == PagesRouting.MainPages.ShopPage,
                           })}
                        />
                        <Link
                           text={'Shopping Cart'}
                           to={PagesRouting.MainPages.Cart}
                           className={cn('nav-item nav-link', {
                              ['active']: currentPage == PagesRouting.MainPages.Cart,
                           })}
                        />
                        <Link
                           text={'Contact'}
                           to={PagesRouting.MainPages.Contact}
                           className={cn('nav-item nav-link', {
                              ['active']: currentPage == PagesRouting.MainPages.Contact,
                           })}
                        />
                     </div>

                     <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <Link to={PagesRouting.MainPages.Cart} className="btn px-0">
                           <i className="fas fa-heart text-primary pr-1" />
                           <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                        </Link>
                        <Link to={PagesRouting.MainPages.Cart} className="btn px-0 ml-3">
                           <i className="fas fa-shopping-cart text-primary pr-1" />
                           <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                        </Link>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
