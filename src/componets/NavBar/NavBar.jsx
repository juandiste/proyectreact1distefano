import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav> 
           
            <div className="nav" >
            <h2>Electro*Cel</h2>
                <button>celulares</button>
                <button>notebook</button>
                <button>tablets</button>
                <button>accesorios</button>
                <button><CartWidget/></button> 
            </div>
            
        </nav>
    )

}
export default NavBar