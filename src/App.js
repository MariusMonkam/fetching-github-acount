import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  if (data) {
    return  <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width={180}/>
     
     <h1>{JSON.stringify(data)}</h1>
      </div>;

    
  }
  return null;
}
