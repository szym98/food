import React from "react";
import { useNavigate } from 'react-router-dom';
import './style.css';
import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../../redux/cart/cart.selector";
import {connect} from "react-redux";

const ButtonCartCount = ({ cartCount }) => {
    const navigate = useNavigate();
    return (
        <div className='btnCartCount' onClick={() => navigate('/cart')}>
            <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
            <i className='fas fa-shopping-cart'></i>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
