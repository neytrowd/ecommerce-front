import { BreadCrumbs } from '@/Components/BreadCrumbs/BreadCrumbs';
import { withModules } from '@/Hocs/WithModules';
import { Contacting } from '@/Pages/Contact/modules/Contacting/Contacting';

const ContactPage = () => {
    return (
        <section>
            <BreadCrumbs />
            <Contacting />
        </section>
    );
};

export default withModules(ContactPage);
