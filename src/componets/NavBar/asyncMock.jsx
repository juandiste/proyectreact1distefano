const products = [
    {
        id:'1',
        nombre:'samsung s22',
        precio: 1600,
        categoria: 'celulares',
        stock: 20,
        }
       
]

export const getproducts = () => {
    return new Promise((resolve) =>{
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getproductsById = (productId) => {
    return new promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod =>prod.id === productId))
        }, 500)
    })
}


export default products