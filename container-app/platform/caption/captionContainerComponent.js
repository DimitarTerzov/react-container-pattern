import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import CaptionView from './captionView';
import CircularProgress from './circularProgress';

// const fetcher = (...args) => fetch(...args).then(res => res.json());
const fetch = require('node-fetch');

export default function CaptionContainer({ refresh, setRefresh }) {
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(null);
  // const { data, error } = useSWR('http://localhost:5000', fetcher);

  useEffect( async () => {
    async function fetchCount() {
      const res = await fetch('http://localhost:5000');
      const json = await res.json();
      return json
    }

     const data = await fetchCount();
     setCount(data);
     setLoading(false);
     setRefresh(false);
  }, [refresh])

  return (
    (isLoading ? <CircularProgress /> :
    <CaptionView count={count} />)
  )
}