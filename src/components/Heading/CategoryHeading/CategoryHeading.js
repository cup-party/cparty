import React from 'react'
import classes from './CategoryHeading.module.css'
import gclasses from '../../../Generic/generic.module.css'

export default function Heading({ heading }) {
    return (
        <div className={classes.headingDiv}>
            <h2 className={classes.heading}>{heading}</h2>
            <div  className={[classes.headingSplitLine, gclasses.g_bgPrimary].join(' ')}></div>
        </div>
    )
}
