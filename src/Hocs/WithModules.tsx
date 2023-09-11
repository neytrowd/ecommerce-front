import React from 'react';
import { Header } from '@/Components/Header/Header';
import { Navbar } from '@/Components/Navbar/Navbar';
import { Footer } from '@/Components/Footer/Footer';
import { ScrollToTop } from '@/Components/ScrollToTop/ScrollToTop';

export function withModules<Props extends object>(
    Component: React.FC<Props>,
): React.FC<Props> {
    return function withModulesComponent(props: Props) {
        return (
            <div>
                <Header />
                <Navbar />
                <Component {...props} />
                <Footer />
                <ScrollToTop />
            </div>
        );
    };
}
