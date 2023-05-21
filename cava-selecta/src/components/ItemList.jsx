import { Item } from "./Item";
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from "react-bootstrap";

export const ItemList = ({ products }) => {

    return (
        <Container>
            <CardGroup>
                { products.map((product, index) => {
                    return (
                        <Item 
                            key={index}
                            {...product} />
                    )
                })}
            </CardGroup>
        </Container>
    )
}