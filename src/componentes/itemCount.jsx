import { useState } from "react"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';


const ItemCount = ({stock, inicial, onAdd})=> {
    const [quantity,setQuantity] =useState(inicial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
const decrement = () => {
    if (quantity > 1){
        setQuantity(quantity-1)
    }
}

return(<Box className="buttoncont"  sx={{ flexGrow: 1 }}>
              <Grid container  spacing={2} margin={5} padding={5}>
              <Grid xs={4} sm={4} md={4} lg={4}>
              <button className="buttoncontador" onClick={decrement} >-</button>
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4}>
              <h4>{quantity}</h4>
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4}>
              <button className="buttoncontador" onClick={increment} >+</button>
              </Grid>
              <Grid className="buttoncont" xs={12} sm={12} md={12} lg={12}>
              <button className="buttoncont"  onClick={() => onAdd(quantity)} disabled={!stock} >agregar al carrito</button>
              </Grid>
              
            </Grid>
            
          </Box>
        );
}
export default ItemCount
