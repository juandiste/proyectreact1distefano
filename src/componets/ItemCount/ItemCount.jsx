import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
         }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div >
            <div className="divitem" >
                <button className="buttonitem" onClick={decrement} >-</button>
                <h2 className="numero" > {quantity} </h2>
                <button className="buttonitem" onClick={increment} >+</button>
            </div>
            <div className="buttoncar">
                <button  onClick={() => onAdd(quantity)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount