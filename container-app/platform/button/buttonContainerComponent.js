import React from 'react';
import Button from './buttonView';

const fetch = require('node-fetch');

export default function ContainerButton({ setRefrsh }) {

  const handleClick = () => {
    fetch('http://192.168.1.104:5000', {
      method: 'POST'
    })
    setRefrsh(true);
  }
  
  return (
    <Button handleClick={handleClick} />
  )
}