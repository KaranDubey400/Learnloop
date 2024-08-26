import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Welcome to the App</h1>
      <Link to="/whiteboard">
        <button style={{ fontSize: "20px", padding: "10px 20px" }}>
          White Board
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
