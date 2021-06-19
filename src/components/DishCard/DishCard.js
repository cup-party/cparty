import React, { useState, useEffect } from 'react'
import { useCart } from '../../contexts/CartContext/CartContext'
import {
    Col, Row
} from 'reactstrap';
import { ButtonGroup, ButtonToolbar, Badge } from 'reactstrap';
import classes from './DishCard.module.css'

export default function DishCard({ id, name, type, price, desc, cat_badge }) {

    //updating quantity of dish
    const [dishCount, setDishCount] = useState(0);
    //setting dish on click of add/remove
    const [item, setItem] = useState({});
    //used for performing cart operation (add/remove) 'wait' is used to prevent adding items on mount of component
    const [cartOperation, setCartOperation] = useState("wait")
    //using context API
    const { addItem } = useCart();

    //called on change in any quantity
    useEffect(() => {
        setItem({
            item_id: id,
            item_name: name,
            item_price: price,
            item_quantity: dishCount
        });
    }, [dishCount, name, price])

    //called on change in any item
    useEffect(() => {
        addItem(item, cartOperation);
    }, [item, addItem, cartOperation])

    const decrementItem = () => {
        setDishCount(dishCount - 1);
        setCartOperation("remove");
    }
    const incrementItem = () => {
        setDishCount(dishCount + 1);
        setCartOperation("add");
    }
    return (
        <Row className={classes.dishRow}>
            <Col xs="8" className={classes.dishColLeft}>
                <h6 className={classes.dishH}>{name}</h6>
                <p className={classes.mutedPType}>{type}</p>
                <div className={classes.dishBadge}>
                    {cat_badge.map(b => (
                        (b.dish_badge_name.toLowerCase() === "bestseller" ? <Badge key={b.dish_badge_id} color="info" pill className={classes.badge}>Bestseller</Badge> : null)
                    ))}
                    {cat_badge.map(b => (
                        (b.dish_badge_name.toLowerCase() === "veg" ? <Badge key={b.dish_badge_id} color="success" pill className={classes.badge}>Veg</Badge> : null)
                    ))}
                    {cat_badge.map(b => (
                        (b.dish_badge_name.toLowerCase() === "non-veg" ? <Badge key={b.dish_badge_id} color="danger" pill className={classes.badge}>Non-Veg</Badge> : null)
                    ))}
                </div>
                <h6 className={classes.price}>₹ {price}</h6>
                <p className={classes.mutedPDesc}>{desc}</p>
            </Col>
            <Col xs="4" className={classes.dishColRight}>
                <img className={classes.dishImg} src="https://c4.wallpaperflare.com/wallpaper/797/364/1014/food-plates-wooden-surface-still-life-wallpaper-preview.jpg" alt="" />
                <ButtonToolbar>
                    <ButtonGroup>
                        {/* <button onClick={logCart} className={[classes.btnDishRem].join(' ')}>GET</button> */}
                        <button onClick={decrementItem} className={[classes.btnDishAdd].join(' ')}>-</button>
                        <button id="qty" className={[classes.btnDishQty].join(' ')} value={dishCount}>{dishCount}</button>
                        <button onClick={incrementItem} className={[classes.btnDishRem].join(' ')}>+</button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>
        </Row>
    )
}
