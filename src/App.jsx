import NavBar from "./componets/NavBar/NavBar";
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount';




function App() {
  return (
  <div>   
    <NavBar/>
    <ItemListContainer greeting={'bienvenidos'}/>
    <ItemCount initial={1} stock={10} onAdd= {(quantity) => console.log('cantidad agregada',quantity)}/> 
  </div> 
   );
  }

export default App;














