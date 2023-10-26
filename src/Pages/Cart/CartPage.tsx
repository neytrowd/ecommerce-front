import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { withModules } from '@/Hocs/WithModules';
import { ProductList } from './modules/ProductList/ProductList';

const CartPage = () => {
    return (
        <section>
            <BreadCrumbs />
            <ProductList />
        </section>
    );
};

export default withModules(CartPage);
