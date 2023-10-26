import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { withModules } from '@/Hocs/WithModules';
import { Ordering } from '@/Pages/Checkout/modules/Ordering/Ordering';

const CheckoutPage = () => {
   return (
      <section>
         <BreadCrumbs />
         <Ordering />
      </section>
   );
};

export default withModules(CheckoutPage);
