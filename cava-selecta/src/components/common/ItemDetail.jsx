import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount';

export const ItemDetail = ({ id, title, description, price, pictureUrl }) => {

    return (
        <Card>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Subtitle>$ {price}</Card.Subtitle>
                <ItemCount stock={"0"} initial={"1"} onAdd={(counter) => console.log('Cantidad de items: ', counter)}/>
            </Card.Body>
        </Card>

    )
}