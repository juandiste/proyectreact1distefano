import ItemCount from "../ItemCount/ItemCount";

const itemDetail =({id, nombre, categoria, precio, descripcion, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <section>
                <p>
                   precio: $ {precio}
                </p>
                <p>
                   stock disponible: {stock}
                </p>
            </section>
            <footer>
            <ItemCount initial={1} stock={10} onAdd= {(quantity) => console.log('cantidad agregada',quantity)}/> 
            </footer>
        </article>
    )
}