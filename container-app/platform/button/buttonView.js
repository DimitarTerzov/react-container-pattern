import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonView({ handleClick }) {

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>Click</Button>
  )
}