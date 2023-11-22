import { useEffect, useState } from "react"
import { getproducts } from "../NavBar/asyncMock"
import { dividerClasses } from "@mui/material"
import ItemDetail from '../itemDetail/itemDetail'

const ItemDetailscontainer = () => {
    const [products, setproducts] = useState(null)

    useEffect(() =>{
        getproductsById('1')
        .then(Response => {
            setproducts(Response)
        })
        .catch(error =>{
            console.error(error);
        })
    },[])
    return(
        <div>
            <ItemDetail {...products}/>
        </div>
    )


    export default ItemDetailscontainer

}