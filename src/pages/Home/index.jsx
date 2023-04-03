import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../pages/Home/Banner/index';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
    const menuRef = useRef(null);

    const handleScrollMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Banner handleScrollMenu={handleScrollMenu} />
            <div ref={menuRef}>
                <Menu list={menuItemsData} />
            </div>
            <Footer />
            <ButtonCartCount />
        </div>
    );
};

export default Home;


