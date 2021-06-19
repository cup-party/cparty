import React, { useState, useEffect } from 'react'
import ConfirmOrderButton from '../../components/Button/ConfirmOrderButton/ConfirmOrderButton';
import CartHeader from '../../components/Cards/CartHeader/CartHeader';
import { Col, Container, Row } from 'reactstrap'
import { useCart } from '../../contexts/CartContext/CartContext'
import classes from './Cart.module.css'
import gclasses from '../../Generic/generic.module.css'
import MenuHeading from "../../components/Heading/MenuHeading/MenuHeading";
import CartItem from '../../components/Cards/CartItem/CartItem';
import Total from '../../components/Cards/Total/Total';
import UserDetailsForm from '../../components/UserDetailsForm/UserDetailsForm';
import CartFooter from '../../components/Footer/CartFooter/CartFooter';
import CategoryHeading from '../../components/Heading/CategoryHeading/CategoryHeading';

export default function Cart() {
    const { cart } = useCart();
    const [totalAmount, setTotalAmount] = useState(0);
    //declaring and initilizing cart data
    const [cartData, setCartData] = useState(null)

    //header text
    const [headerText, setHeaderText] = useState("Hey, add some dishes..")

    useEffect(() => {
        getTotalAmount();
        setCartData(cart);
        setHeaderText(cart.length === 0 ? "Hey, add some dishes.." : "Hey, your order contains..");
        console.log("cart ", cart);
    }, [])

    //mapping cart items
    let renderCart = null;
    if (cartData != null) {
        renderCart = cartData.map(item =>
            <Col xs="12" key={item.item_id}>
                <Row>
                    <Col xs="12" md="6" className={classes.colDish}>
                        <CartItem
                            name={item.item_name}
                            price={item.item_price}
                            quantity={item.item_quantity} />
                    </Col>
                </Row>
                {/* </Row> */}
            </Col>
        )
    }

    const getTotalAmount = () => {
        setTotalAmount(0);
        console.log("Generating total amount: ");
        let dishAmt = 0;
        for (let i = 0; i < cart.length; i++) {
            dishAmt = dishAmt + Number(cart[i].item_price) * Number(cart[i].item_quantity);
            console.log("Item ", i + 1, " :", Number(cart[i].item_price) * Number(cart[i].item_quantity), ' ', "Qty: ", Number(cart[i].item_quantity));
        }
        setTotalAmount(dishAmt);
        console.log(cart, "Total: ", totalAmount);
    }
    return (
        <div>
            {/* <p>Len cal {cart.length}</p>
            <button onClick={() => getTotalAmount()} >Bill</button>
            {
                totalAmount
            } */}
            <Container>
                <Row className={[classes.below, gclasses.g_bgRestroDetails].join(' ')}>
                    <Col xs="12" className={classes.colRestroDetails}>
                        <CartHeader text={headerText} path="/restro" />
                    </Col>
                    {/* <button onClick={()=>console.log(cart)} >Log</button> */}
                </Row>

                <div className={[classes.above].join(' ')}>
                    <Row className={[classes.bgWhite].join(' ')}>
                        {/* Heading MENU */}
                        <Col xs="12" className={[classes.colHead, gclasses.g_bgRestroDetails].join(' ')}>
                            <MenuHeading heading="Your Table" />
                        </Col>

                        {/* Cart Items */}
                        {renderCart}

                        <Col xs="12" className={classes.colHead}>
                            <Total totalPrice={totalAmount} />
                        </Col>

                        {/* User Details Form */}
                        <CategoryHeading heading={"Fill details to confirm order"} />
                        <Col xs="12" className={classes.colHead}>
                            <UserDetailsForm />
                        </Col>
                        {/* footer */}
                        <CartFooter />
                        {/* Order Button */}
                        <Col xs="12" className={classes.colHead}>
                            <ConfirmOrderButton />
                        </Col>


                    </Row>
                </div>
            </Container>

        </div>
    )
}
