import { ItemList } from "./ItemList";
import { getProducts, getProductsByCategory } from "../asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Picture1 from '../assets/images/products/product-1.jpeg'
// import Picture2 from '../assets/images/products/product-2.jpeg'
// import Picture3 from '../assets/images/products/product-3.jpeg'

export const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const asyncFunc = id ? getProductsByCategory : getProducts;

        asyncFunc(id)
            .then((data) => setProducts(data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <>
            <h1 className="greeting">{ greeting }</h1>
            <ItemList products={products} />
        </>
    )
}