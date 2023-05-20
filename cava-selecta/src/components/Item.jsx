import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ( { id, title, description, price, pictureUrl } ) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ pictureUrl } width={"100px"}/>
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                    <Card.Title>$ { price }</Card.Title>
                    <Button variant="primary">
                        <Link to={`/item/${id}`} 
                            style={{color: 'white',
                            textDecoration: 'none'}}
                            >Ir al detalle</Link>
                    </Button>
                </Card.Body>
            </Card>
    )
}
