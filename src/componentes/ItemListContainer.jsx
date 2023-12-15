import { useEffect, useState } from "react"

const itemListContainer = ({greeting}) => {

    return(
        <div >
            <h1 className="saludo" >{greeting}</h1>
        </div>
    )
}

export default itemListContainer