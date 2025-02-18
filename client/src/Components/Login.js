import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';  // Import the API function for login

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset any previous error

    try {
      const response = await loginUser(loginData);
      console.log("Login Success:", response);  // Debugging: Log success response
      alert('Login Successful');
      
      // Redirect user to dashboard or homepage after login
      navigate('/');
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-success w-100">Login</button>
            </form>
            <div className="mt-3 text-center">
              <span>Don't have an account? </span>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
