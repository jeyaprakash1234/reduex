import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../store';
import { Button, Card, Badge } from 'react-bootstrap';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const increaseQty = () => {
        dispatch(increaseQuantity(product.id));
    };

    const decreaseQty = () => {
        dispatch(decreaseQuantity(product.id));
    };

    const remove = () => {
        dispatch(removeItem(product.id));
    };

    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-thumbnail"
                        style={{ width: '100px', height: '100px', marginRight: '20px' }}
                    />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <Card.Title>{product.title}</Card.Title>
                            <Button variant="danger" size="sm" onClick={remove}>
                                Remove
                            </Button>
                        </div>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ${product.price.toFixed(2)} {' '}
                            <Badge bg="success">{product.discountPercentage}% Off</Badge>
                        </Card.Text>
                        <Card.Text>
                            <strong>Stock:</strong> {product.stock}
                        </Card.Text>
                        <div className="d-flex align-items-center">
                            <Button variant="outline-primary" size="sm" onClick={decreaseQty} disabled={product.quantity <= 1}>
                                -
                            </Button>
                            <span className="mx-2">{product.quantity}</span>
                            <Button variant="outline-primary" size="sm" onClick={increaseQty}>
                                +
                            </Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
