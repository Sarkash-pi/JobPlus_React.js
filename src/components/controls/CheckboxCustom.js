import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '33px'
  },
}))
// eslint-disable-next-line
export default function(props) {
  
  const classes = useStyles();
  const { value } = props;
  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={value}
      labelPlacement="end"
      classes={{ root: classes.root }}
    />
  );
};
