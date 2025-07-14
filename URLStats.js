import React, { useEffect, useState } from 'react';

const URLStats = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('urls')) || [];
    setUrls(stored);
  }, []);

  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {urls.map((u, i) => (
          <li key={i}>
            <strong>{u.shortcode}</strong> → {u.longUrl} <br />
            Expires at: {new Date(u.expiresAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default URLStats;
