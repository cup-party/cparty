import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './ViewCartButton.module.css'
import { Button, Col, Row } from 'reactstrap'
import gclasses from '../../../Generic/generic.module.css'
import { useCart } from '../../../contexts/CartContext/CartContext'

export default function ViewCartButton() {

    const { cartLength } = useCart();
    const history = useHistory();

    return (
        <div>
            <Button className={[classes.btnViewCart, gclasses.g_bgRestroDetails].join(' ')} onClick={()=> history.push("/cart")} >
                <Row className={classes.btnViewCartRow}>
                    {/* <Col className={classes.btnCartColLeft} xs="6">
                        <p className={classes.btnCartColItems}>{cartLength} ITEMS</p>
                        <p className={classes.btnCartColPrice}>₹ 420</p>
                    </Col> */}
                    <Col className={classes.btnCartColRight} xs="12">
                        <h3 className={classes.btnCartText} >View Cart &gt;</h3>
                    </Col>
                </Row>
            </Button>
        </div>
    )
}
