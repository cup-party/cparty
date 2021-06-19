import React from 'react';
import {
    Row, Col
} from 'reactstrap';
import classes from './CartHeader.module.css'
import gclasses from '../../../Generic/generic.module.css'
import BackIcon from '../../Icons/BackIcon/BackIcon';
export default function CartHeader({ text,path }) {
    return (
        <Row className={classes.restroCardBox}>
            <Col xs="2" className={classes.restroColBackIcon}>
                <BackIcon path={path}/>
            </Col>
            <Col xs="10" className={classes.restroCol}>
                <h2 className={[classes.restroName, gclasses.g_cWhite].join(' ')}>
                    {text}
                </h2>
                {/* <p className={[classes.restroType, gclasses.g_cWhite].join(' ')}>
                    
                </p> */}
            </Col>
        </Row>
    )
}
