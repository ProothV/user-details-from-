
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Ensure this is correct
});

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error.response || error.message);
    throw error;  // Propagate error to be caught in component
  }
};

// Login user
// export const loginUser = async (loginData) => {
//   try {
//     const response = await api.post('/auth/login', loginData);
//     return response.data;
//   } catch (error) {
//     console.error("Error during login:", error.response || error.message);
//     throw error;
//   }
// };
export const loginUser = async (loginData) => {
    try {
      const response = await api.post('/auth/login', loginData);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error.response || error.message);
      throw error;
    }
  };
  

// Get services (if applicable)
export const getServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error.response || error.message);
    throw error;
  }
};
