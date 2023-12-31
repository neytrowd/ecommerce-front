import React from 'react';
import { Images } from '@/Assets/Images';
import { PagesRouting } from '@/Routing';
import { Button } from '@/Components/Controls/Button/Button';
import { Link } from '@/Components/Controls/Link/Link';

export function Offer() {
   return (
      <div className="container-fluid pt-5 pb-3">
         <div className="row px-xl-5">
            <div className="col-md-6">
               <div className="product-offer mb-30" style={{ height: 300 }}>
                  <img className="img-fluid" src={Images.Offer1} alt="" />
                  <div className="offer-text">
                     <h6 className="text-white text-uppercase">Save 20%</h6>
                     <h3 className="text-white mb-3">Special Offer</h3>
                     <Link to={PagesRouting.MainPages.ShopPage}>
                        <Button>Shop Now</Button>
                     </Link>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="product-offer mb-30" style={{ height: 300 }}>
                  <img className="img-fluid" src={Images.Offer2} alt="" />
                  <div className="offer-text">
                     <h6 className="text-white text-uppercase">Save 20%</h6>
                     <h3 className="text-white mb-3">Special Offer</h3>
                     <Link to={PagesRouting.MainPages.ShopPage}>
                        <Button>Shop Now</Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
