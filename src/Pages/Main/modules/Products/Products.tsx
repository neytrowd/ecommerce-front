import React from 'react';
import { useProductOptions } from '@/Pages/Main/modules/Products/hooks/useProductOptions';
import { ProductCard } from '@/Components/ProductCard/ProductCard';

export function Products() {
   const productOptions = useProductOptions();

   return (
      <div className="container-fluid pt-5 pb-3">
         <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Featured Products</span>
         </h2>
         <div className="row px-xl-5">
            {productOptions.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </div>
      </div>
   );
}
