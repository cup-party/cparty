import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './BackIcon.module.css'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
export default function BackIcon({path}) {
    return (
        <Link to={path}>
            <FontAwesomeIcon className={classes.icon} icon={faChevronLeft} />
        </Link>
    )
}