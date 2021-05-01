import React from 'react';
import Button from './buttonView';
import {LOCAL_API} from '../../app/constants/localApiUrl';

const fetch = require('node-fetch');

export default function ContainerButton({ setRefrsh }) {

  const handleClick = () => {
    fetch(LOCAL_API, {
      method: 'POST'
    })
    setRefrsh(true);
  }
  
  return (
    <Button handleClick={handleClick} />
  )
}