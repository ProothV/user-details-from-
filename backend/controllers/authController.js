const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const registerUser = async (req, res) => {
//   try {
//     const { name, email, mobile, message, password } = req.body;

//     // Check if user exists
//     let userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const user = new User({ name, email, mobile, message, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "Registration successful!" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };
const registerUser = async (req, res) => {
    try {
      console.log("Received Data:", req.body); // Debugging
  
      const { name, email, mobile, message, password } = req.body;
      
      if (!name || !email || !mobile || !password) {
        return res.status(400).json({ message: "All fields are required!" });
      }
  
      let userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists!" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = new User({ name, email, mobile, message, password: hashedPassword });
      await user.save();
  
      console.log("User Registered:", user); // Debugging
      res.status(201).json({ message: "Registration Successful!" });
    } catch (error) {
      console.error("Registration Error:", error.message);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { registerUser, loginUser, getUser };

