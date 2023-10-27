import React from 'react';
import { Link } from '@/Components/Controls/Link/Link';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { PagesRouting } from '@/Routing';

type Props = {
   breadcrumbs: any;
};

const routes = [
   { path: PagesRouting.MainPages.MainPage, breadcrumb: 'Main' },
   { path: PagesRouting.MainPages.ShopPage, breadcrumb: 'Shop' },
   { path: PagesRouting.MainPages.ShopDetail, breadcrumb: 'Product details' },
   { path: PagesRouting.MainPages.Cart, breadcrumb: 'Shopping cart' },
   { path: PagesRouting.MainPages.Checkout, breadcrumb: 'Checkout' },
   { path: PagesRouting.MainPages.Contact, breadcrumb: 'Contact' },
];

function BreadCrumbsComponent({ breadcrumbs }: Props) {
   return (
      <div className="container-fluid">
         <div className="row px-xl-5">
            <div className="col-12">
               <nav className="breadcrumb bg-light mb-30">
                  {breadcrumbs.map(({ match, breadcrumb }: any) => (
                     <Link to={match.url} key={match.url} className="breadcrumb-item">
                        {breadcrumb}
                     </Link>
                  ))}
               </nav>
            </div>
         </div>
      </div>
   );
}

export const BreadCrumbs = withBreadcrumbs(routes)(BreadCrumbsComponent);
