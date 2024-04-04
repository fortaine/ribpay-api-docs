// src/pages/404.js
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

//   useEffect(() => {
//     // Redirect to your target page after a short delay or immediately
//     setTimeout(() => {
//       history.push('/your-target-page'); // Update '/your-target-page' to your desired path
//     }, 1000); // Delay in milliseconds (1000ms = 1s)
//   }, [history]);

  return (
    <Layout>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>We're redirecting you to our homepage...</p>
      </div>
    </Layout>
  );
}

export default NotFound;
