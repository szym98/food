import React from 'react';
import Banner from'./Banner/index';
import Menu from '../../components/common/Menu/index';
import Footer from '../../components/common/Footer/index';
import CartCountButton from'../../components/common/CartCountButton/index'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Menu/>
      <Footer/>
      <CartCountButton/>
    </div>
  );
};
export default Home;