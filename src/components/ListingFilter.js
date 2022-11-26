import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Hidden } from '@material-ui/core'
import Filter from './Filter'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: '0.3rem',
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

export default function ListingFilter(props) {
  const classes = useStyles();
  const { components } = props;
  
  const sectors = [
    { link: '/', name: 'Technology', count: 14 },
    { link: '/', name: 'Engineering', count: 200 },
    { link: '/', name: 'Health', count: 50 },
  ];

  const locations = [
    { link: '/', name: 'Job in London', count: 250 },
    { link: '/', name: 'Job in West Midlands', count: 564 },
    { link: '/', name: 'Job in Newcastle', count: 54 },
  ]; 

  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
          <Filter title="Browse by sector" items={sectors}/>
          <Filter title="Browse by location" items={locations}/>
        </Hidden>
      </div>
      <div className={classes.rblock}>
        {components.map((comp) => (
          comp
        ))}
      </div>
    </div>
  )
}
