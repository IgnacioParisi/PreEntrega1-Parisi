import { ItemList } from "./ItemList";
import { getProducts } from "../asyncMock";
import { useEffect, useState } from "react";
// import Picture1 from '../assets/images/products/product-1.jpeg'
// import Picture2 from '../assets/images/products/product-2.jpeg'
// import Picture3 from '../assets/images/products/product-3.jpeg'

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    console.log(products)

    return (
        <>
            <h1 className="greeting">{ greeting }</h1>
            <ItemList products={products} />
        </>
    )
}