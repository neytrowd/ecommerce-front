import React from 'react';
import { useCategoryOptions } from './hooks/useCategoryOptions';

export function Categories() {
   const categoryOptions = useCategoryOptions();

   return (
      <div className="container-fluid pt-5">
         <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Categories</span>
         </h2>
         <div className="row px-xl-5 pb-3">
            {categoryOptions.map((category) => (
               <div key={category.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                  <a className="text-decoration-none" href="">
                     <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                           <img className="img-fluid" src={category.image} alt="" />
                        </div>
                        <div className="flex-fill pl-3">
                           <h6>{category.categoryName}</h6>
                           <small className="text-body">100 Products</small>
                        </div>
                     </div>
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
}
