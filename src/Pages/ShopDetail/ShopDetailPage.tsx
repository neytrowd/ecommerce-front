import React from 'react';
import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { withModules } from '@/Hocs/WithModules';
import { ProductDetails } from '@/Pages/ShopDetail/modules/ProductDetails/ProductDetails';

const ShopDetailPage = () => {
    return (
        <section>
            <BreadCrumbs />
            <ProductDetails />
        </section>
    );
};

export default withModules(ShopDetailPage);
