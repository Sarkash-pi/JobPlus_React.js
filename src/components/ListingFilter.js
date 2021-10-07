import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: '1.2rem',
    ...theme.container,
    marginTop: '1.5rem',
  },
  lblock: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
  rblock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
  },
}));

export default function ListingFilter() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
          <p>Filter 1</p>
          <p>Filter 2</p>
        </Hidden>
      </div>
      <div className={classes.rblock}>
        <p>Listing 1</p>
        <p>Listing 2</p>
      </div>
    </div>
  )
}
