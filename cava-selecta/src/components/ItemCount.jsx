import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    const decrement = () => {
        if (counter > 0) {
            setCounter( prev => prev - 1);
        }
    }

    const increment = () => {
        if (counter < stock) {
            setCounter( prev => prev + 1);
        }
    }
  
    return (
        <div className="item-count">
            <div></div>
            <Button onClick={ decrement } variant="danger">-</Button>
            <p className="item">{counter}</p>
            <Button onClick={ increment } variant="primary">+</Button>
            <Button onClick={() => onAdd(counter)} disabled={!stock} variant="primary" style={{marginLeft: "50px"}}>
                Agregar al carrito
            </Button>
        </div>
    )
}