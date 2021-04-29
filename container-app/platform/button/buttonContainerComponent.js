import React from 'react';
import Button from './buttonView';

const fetch = require('node-fetch');

export default function ContainerButton({ setRefrsh }) {

  const handleClick = () => {
    fetch('http://localhost:5000', {
      method: 'POST'
    })
    setRefrsh(true);
  }
  
  return (
    <Button handleClick={handleClick} />
  )
}