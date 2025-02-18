import React from 'react';
import { Link } from 'react-router-dom';
// import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Etecholab</h1>
      <p>We provide cutting-edge technical solutions and services to help your business grow.</p>
      <div className="buttons">
        <Link className="btn btn-primary mx-2" to="/login">Login</Link>
        <Link className="btn btn-success" to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
