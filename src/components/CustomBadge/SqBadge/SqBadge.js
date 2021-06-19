import React from 'react'
import classes from './SqBadge.module.css'

export default function SqBadge({ head1, head2 }) {
    return (
        <div className={classes.badgeBox}>
            <div className={classes.badgeH1Box}>
                <p className={classes.badgeH1}>
                    {head1}
                </p>
            </div>
            <div className={classes.badgeH2Box}>
                <p className={classes.badgeH2}>
                    {head2}
                </p>
            </div>
        </div>
    )
}
