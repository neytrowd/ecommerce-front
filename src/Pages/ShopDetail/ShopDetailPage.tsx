import React from 'react';
import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { withModules } from '@/Hocs/WithModules';

const ShopDetailPage = () => {
    return (
        <section>
            <BreadCrumbs />
        </section>
    );
};

export default withModules(ShopDetailPage);
