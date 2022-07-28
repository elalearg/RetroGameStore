import React , { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ItemCount.scss'

const ItemCount = ({stock}) => {
const [unidades,setUnidades] = useState(0);
const handleMinus = () => 
{
    if(unidades > 0)
    {
        setUnidades(unidades-1);
    }
}
const handlePlus = () => 
{
    if(unidades < stock )
    {
        setUnidades(unidades+1);
    }
    
}
    return (
        <div className='caja'>
            <IconButton onClick={handleMinus} className='boton' color="primary" aria-label="upload picture" component="label">        
                <RemoveIcon />
            </IconButton>
            <label>{unidades}</label>            
            <IconButton onClick={handlePlus} className='boton' color="primary" aria-label="upload picture" component="label">        
                <AddIcon />
            </IconButton>
        </div>
    );
    }
export default ItemCount;