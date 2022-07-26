import React , { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.scss'

const ItemCount = (greating) => {
const [stock,setStock] = useState(0);
const handleMinus = () => 
{
    if(stock > 0)
    {
        setStock(stock-1);
    }
}
const handlePlus = () => 
{
    setStock(stock+1);
    
}
    return (
        <div className='caja'>
            <IconButton onClick={handleMinus} className='boton' color="primary" aria-label="upload picture" component="label">        
                <RemoveIcon />
            </IconButton>
            <label>{stock}</label>            
            <IconButton onClick={handlePlus} className='boton' color="primary" aria-label="upload picture" component="label">        
                <AddIcon />
            </IconButton>
        </div>
    );
    }
export default ItemCount;