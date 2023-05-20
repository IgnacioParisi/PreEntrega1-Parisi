import { Item } from "./Item";
// import { useParams } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';

export const ItemList = ({ products }) => {

    return (
        <div>
            <CardGroup>
                { products.map((product, index) => {
                    return (
                        <Item 
                            key={index} 
                            id={product.id} 
                            title={product.title} 
                            description={product.description} 
                            price={product.price} 
                            pictureUrl={product.pictureUrl} />
                    )
                })}
            </CardGroup>
        </div>
    )
}