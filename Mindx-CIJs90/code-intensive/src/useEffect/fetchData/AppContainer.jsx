import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function AppContainer() {
  const [personId, setPersonId] = useState('1');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    async function startFetching() {
      setBio(null);
      const result = await fetchBio(personId);
      if (!ignore) {
        setBio(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, [personId]);

  return (
    <>
      <select value={personId} onChange={e => {
        setPersonId(e.target.value);
      }}>
        <option value="1">Alice</option>
        <option value="2">Bob</option>
        <option value="3">Taylor</option>
      </select>
      <hr />
      <div>{bio && bio.length > 0 ? <div>{bio.map((item, index)=>{
        return <div key={item.id}>{item.name}</div>
      })}</div>
       : 'Loading...'}</div>
    </>
  );
}
