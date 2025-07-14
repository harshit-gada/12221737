import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Redirector = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urls")) || [];
    const match = stored.find(url => url.shortcode === shortcode);

    if (match) {
      const now = new Date();
      const expires = new Date(match.expiresAt);

      if (expires > now) {
        window.location.href = match.longUrl;
      } else {
        alert("This link has expired.");
        navigate("/");
      }
    } else {
      alert("Short URL not found.");
      navigate("/");
    }
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirector;
