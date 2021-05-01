import React, { useEffect, useState } from 'react';
import CaptionView from './captionView';
import CircularProgress from './circularProgress';
import {LOCAL_API} from '../../app/constants/localApiUrl';

const fetch = require('node-fetch');

export default function CaptionContainer({ refresh, setRefresh }) {
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch(LOCAL_API);
      const json = await res.json();
      setCount(json)
    }

    fetchCount();
    setLoading(false);
    setRefresh(false);
  }, [refresh])

  return (
    (isLoading ? <CircularProgress /> :
    <CaptionView count={count} />)
  )
}