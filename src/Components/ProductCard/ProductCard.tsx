import React from 'react';
import { ProductModel } from '@/Models/ProductModel';

type Props = {
   product: ProductModel;
};

export function ProductCard({ product }: Props) {
   return (
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
         <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
               <img className="img-fluid w-100" src={product.image} alt="product" />
               <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="#">
                     <i className="fa fa-shopping-cart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                     <i className="far fa-heart" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                     <i className="fa fa-sync-alt" />
                  </a>
                  <a className="btn btn-outline-dark btn-square" href="#">
                     <i className="fa fa-search" />
                  </a>
               </div>
            </div>
            <div className="text-center py-4">
               <a className="h6 text-decoration-none text-truncate" href="#">
                  Product Name Goes Here
               </a>
               <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>$123.00</h5>
                  <h6 className="text-muted ml-2">
                     <del>$123.00</del>
                  </h6>
               </div>
               <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
               </div>
            </div>
         </div>
      </div>
   );
}
