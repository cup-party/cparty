import React from 'react';
import {
    Row, Col
} from 'reactstrap';
import SqBadge from '../CustomBadge/SqBadge/SqBadge';
import classes from './RestroDetailsCard.module.css'
import gclasses from '../../Generic/generic.module.css'
export default function RestroDetailsCard({ name, type, address }) {
    return (
        <Row className={classes.restroCardBox}>
            <Col xs="12" className={classes.restroCol}>
                <h2 className={[classes.restroName, gclasses.g_cWhite].join(' ')}>
                    {name}
                </h2>
                <p className={[classes.restroType, gclasses.g_cWhite].join(' ')}>
                    {type}
                </p>
                <p className={[classes.restroAddr, gclasses.g_cWhite].join(' ')}>
                    {address}
                </p>
                <div className={classes.sqbadge}>
                    <span className={classes.badge}><SqBadge head2="SERVICE" head1="HYGIENIC" /></span>
                    <span><SqBadge className={classes.badge} head1="MAX" head2="SAFETY" /></span>
                </div>
            </Col>
        </Row>
    )
}
