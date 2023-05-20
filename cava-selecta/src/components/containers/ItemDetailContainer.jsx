import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../common/ItemDetail"
import { getProductsById } from "../../asyncMock";
// import Picture1 from '../../assets/images/products/product-1.jpeg'
// import Picture2 from '../../assets/images/products/product-2.jpeg'
// import Picture3 from '../../assets/images/products/product-3.jpeg'

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProductsById(id)
            .then((product) => setProduct(product))
            .catch((error) => console.log(error))
    }, [id])

    console.log(product)

    return (
        <>
          <ItemDetail {...product}/>
        </>
    )
}