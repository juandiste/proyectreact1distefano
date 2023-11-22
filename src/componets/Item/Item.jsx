const Item = ({id, nombre, precio, stock}) =>{
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
                <button>ver detalles</button>
            </footer>
        </article>
    )
}
export default Item