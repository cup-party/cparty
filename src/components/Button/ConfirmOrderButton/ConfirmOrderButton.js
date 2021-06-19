import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './ConfirmOrderButton.module.css'
import { Button, Col, Row } from 'reactstrap'
import gclasses from '../../../Generic/generic.module.css'

export default function ConfirmOrderButton() {

    const history = useHistory();

    return (
        <div>
            <Button className={[classes.btnViewCart, gclasses.g_bgRestroDetails].join(' ')} onClick={()=> history.push("/order")} >
                <Row className={classes.btnViewCartRow}>
                    <Col className={classes.btnCartColRight} xs="12">
                        <h3 className={classes.btnCartText} >Confirm Order &gt;</h3>
                    </Col>
                </Row>
            </Button>
        </div>
    )
}
