import ItemCount from './componentes/itemCount';
import NavBar from './componentes/navbar'
import BasicGrid from './componentes/products';


function App() {
  return ( <div> 

    <NavBar/>
    <ItemCount inicial={1} stock={10} onAdd={(quantity)=> console.log('cantidad agregada',quantity)}/>
    <BasicGrid/>
    
    
   </div> 
   
   );
  }

export default App;














