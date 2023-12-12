import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} margin={2} padding={3}>
        <Grid xs={4} sm={4} md={4} lg={4}>
        <h2 className="h1stile" >Electro*house</h2>
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
        <button className="buttonstile" >celulares</button>
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
        <button className="buttonstile" >tablets</button>
        </Grid>
        <Grid xs={2} sm={2} md={2} lg={2}>
        <button className="buttonstile" >notebooks</button>
        </Grid>
        
        <Grid xs={2} sm={2} md={2} lg={2} >
        <IconButton aria-level="show cart items" color='inherit'>
          <Badge badgeContent={2} color='secondary'>
          <ShoppingCart fontSize='large' color='primary'/>
          </Badge>
        </IconButton>

        </Grid>
        
      </Grid>
      
    </Box>
  );
}
























