// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     password: '',
//   });
//   const [error, setError] = useState(''); // Store error messages
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     // Basic validation before submitting
//     if (!formData.name || !formData.email || !formData.mobile || !formData.password) {
//       setError('All fields are required!');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/auth/register', formData);
//       alert(response.data.message || 'Registration Successful');
//       navigate('/login');
//     } catch (error) {
//       // Show detailed error from backend
//       setError(error.response?.data?.message || 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="text-center">Register</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card p-4 shadow">
//             {error && <div className="alert alert-danger">{error}</div>}
//             <form onSubmit={handleSubmit}>
//               <input type="text" className="form-control mb-3" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
//               <input type="email" className="form-control mb-3" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
//               <input type="text" className="form-control mb-3" placeholder="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
//               <textarea className="form-control mb-3" placeholder="Message" name="message" value={formData.message} onChange={handleChange} />
//               <input type="password" className="form-control mb-3" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
//               <button type="submit" className="btn btn-success w-100">Register</button>
//             </form>
//             <p className="text-center mt-3">
//               Already have an account? <a href="/login" className="text-primary">Login here</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';  // Import the API function for registration

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset any previous error

    try {
      const response = await registerUser(formData);
      console.log("Registration Success:", response);  // Debugging: Log success response
      alert('Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error("Registration Failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Register</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-3"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
