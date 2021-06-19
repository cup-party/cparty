import React, { useState, useEffect } from 'react'
// import { useCart } from '../../contexts/CartContext/CartContext'
import {
    Col, Row
} from 'reactstrap';
import classes from './CartItem.module.css'

export default function CartItem({ name, price, quantity }) {

    // //updating quantity of dish
    // const [dishCount, setDishCount] = useState(0);
    // //setting dish on click of add/remove
    // const [item, setItem] = useState({});
    // //used for performing cart operation (add/remove) 'wait' is used to prevent adding items on mount of component
    // const [cartOperation, setCartOperation] = useState("wait")
    // //using context API
    // const { addItem } = useCart();

    // //called on change in any quantity
    // useEffect(() => {
    //     setItem({
    //         item_name: name,
    //         item_price: price,
    //         item_quantity: dishCount
    //     });
    // }, [dishCount, name, price])

    //called on change in any item
    // useEffect(() => {
    //     addItem(item, cartOperation);
    // }, [item, addItem, cartOperation])

    // const decrementItem = () => {
    //     setDishCount(dishCount - 1);
    //     setCartOperation("remove");
    // }
    // const incrementItem = () => {
    //     setDishCount(dishCount + 1);
    //     setCartOperation("add");
    // }
    const getTotalPrice = (amt, qty) => {
        return Number(amt) * Number(qty);
    }
    return (
        <Row className={classes.dishRow}>
            <Col xs="8" className={classes.dishColLeft}>
                <h6 className={classes.dishH}>{name}</h6>
                <h6 className={classes.priceSingle}>₹ {price}</h6>
            </Col>
            <Col xs="4" className={classes.dishColRight}>
                <h6 className={classes.price}>₹ {getTotalPrice(price, quantity)}</h6>
                <p className={classes.mutedPDesc}>Qty {quantity}</p>
                {/* <ButtonToolbar>
                    <ButtonGroup>
                        <button onClick={decrementItem} className={[classes.btnDishAdd].join(' ')}>-</button>
                        <button id="qty" className={[classes.btnDishQty].join(' ')} value={dishCount}>{dishCount}</button>
                        <button onClick={incrementItem} className={[classes.btnDishRem].join(' ')}>+</button>
                    </ButtonGroup>
                </ButtonToolbar> */}
            </Col>
        </Row>
    )
}
