import { useEffect, useState } from "react"
import { getproducts } from "../NavBar/asyncMock"
import itemList from "../itemList/itemList"

const itemListContainer = ({greeting}) => {
   const [products, setproducts]= useState([])

   useEffect(() => {
    getproducts()
        .then(Response =>{
            setproducts(Response)
        })
        .catch(error =>{
            console.error(error);
        })
   }, [])

    return(
        <div>
            <h1>
                {greeting}
            </h1>
        </div>
        )
    }

    export default itemListContainer