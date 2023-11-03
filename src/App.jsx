import { useState } from 'react'
import edif from "./assets/robot.png"
import { blue, red } from '@mui/material/colors'
import stilos from "./components/App.css"
import img from "./assets/carrito.png"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';




function App() {
  return <div>       
<header>
<Box xl={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div>
          <img  src={edif}/>
          <h2 className='jhon'>Electro House</h2>
          </div>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Telefonia.
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notebook.
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tablets.
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            accesorios.
          </Button>
          <Button color="inherit"><img  src={img}/></Button>
        </Toolbar>
      </AppBar>
    </Box>
</header>  
</div> }
export default App
