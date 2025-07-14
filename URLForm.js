import React, { useState } from 'react';
import { logger } from './logger';

const URLForm = () => {
  const [urls, setUrls] = useState([]);
  const [formData, setFormData] = useState({
    longUrl: '',
    validity: '',
    shortcode: ''
  });

  const generateRandomCode = () => Math.random().toString(36).substr(2, 6);

  const handleSubmit = (e) => {
  e.preventDefault();

  const { longUrl, validity, shortcode } = formData;

  if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
    alert('Please enter a valid URL (starting with http:// or https://)');
    return;
  }

  const minutes = parseInt(validity) || 30;
  const code = shortcode.trim() || generateRandomCode();


  if (urls.find(u => u.shortcode === code)) {
    alert('Shortcode must be unique.');
    return;
  }

  const expiresAt = new Date(Date.now() + minutes * 60000);
  const newEntry = { longUrl, shortcode: code, expiresAt };


  const updatedList = [...urls, newEntry];
  setUrls(updatedList);
  localStorage.setItem("urls", JSON.stringify(updatedList));

  logger("URL_CREATED", newEntry);

  setFormData({ longUrl: '', validity: '', shortcode: '' });
};


  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Long URL"
          value={formData.longUrl}
          onChange={(e) => setFormData({ ...formData, longUrl: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Validity (mins, default 30)"
          value={formData.validity}
          onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
        />
        <input
          type="text"
          placeholder="Custom shortcode (optional)"
          value={formData.shortcode}
          onChange={(e) => setFormData({ ...formData, shortcode: e.target.value })}
        />
        <button type="submit">Shorten</button>
      </form>

      <h3>Shortened URLs</h3>
      <ul>
        {urls.map((u, index) => (
          <li key={index}>
            <strong>Short:</strong> {window.location.origin}/{u.shortcode} <br />
            <strong>Long:</strong> {u.longUrl} <br />
            <strong>Expires:</strong> {u.expiresAt.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default URLForm;
