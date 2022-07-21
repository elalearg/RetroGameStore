import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Chip from '@mui/material/Chip';

const CartWidget = () => {
return (
    <Chip icon={<ShoppingCartIcon color='primary'  />} clickable label='0'/>
    
);
}
export default CartWidget;