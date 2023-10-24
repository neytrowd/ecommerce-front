import React from 'react';
import { withModules } from '@/Hocs/WithModules';
import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { Filters } from '@/Pages/Shop/modules/Filters/Filters';
import { Products } from '@/Pages/Shop/modules/Products/Products';

const ShopPage = () => {
    return (
        <section>
            <BreadCrumbs />

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <Filters />
                    <Products />
                </div>
            </div>
        </section>
    );
};

export default withModules(ShopPage);
