import React from 'react';
import { withModules } from '@/Hocs/WithModules';
import { Carousel } from '@/Pages/Main/modules/Carousel/Carousel';
import { Features } from '@/Pages/Main/modules/Features/Features';
import { Categories } from '@/Pages/Main/modules/Categories/Categories';
import { Products } from '@/Pages/Main/modules/Products/Products';
import { Offer } from '@/Pages/Main/modules/Offer/Offer';

const MainPage = () => {
    return (
        <section>
            <Carousel />
            <Features />
            <Categories />
            <Products />
            <Offer />
        </section>
    );
};

export default withModules(MainPage);
