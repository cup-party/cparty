import React from 'react'
import classes from './MenuHeading.module.css'
export default function Heading({ heading }) {
    return (
        <div className={classes.headingDiv}>
            <h2 className={classes.heading}>{heading}</h2>
        </div>
    )
}
