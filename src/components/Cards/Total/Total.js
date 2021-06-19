import React from 'react'
import gclasses from '../../../Generic/generic.module.css'
import {
    Col, Row
} from 'reactstrap';
import classes from './Total.module.css'

export default function Total({ totalPrice }) {

    return (
        <Row className={classes.dishRow}>
            <Col xs="8" className={classes.dishColLeft}>
                <h6 className={[classes.dishH, gclasses.g_cPrimary, gclasses.g_borderPrimary].join(' ')}>Bill Total</h6>
                <p className={classes.mutedPDesc}>(Exclusive of all taxes)</p> 
            </Col>
            <Col xs="4" className={classes.dishColRight}>
                <h6 className={classes.price}>₹ {totalPrice}</h6>
            </Col>
        </Row>
    )
}
