const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'teaShopSecretKey';

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPassword });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Compare password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    // JWT token generation with role included
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    // Role-based validation
    if (user.role === 'admin') {
      return res.status(200).json({ message: 'Admin login successful', token });
    }

    if (user.role === 'vendor') {
      return res.status(200).json({ message: 'Vendor login successful', token });
    }

    // Default for customer
    if (user.role === 'customer') {
      return res.status(200).json({ message: 'Customer login successful', token });
    }

    // If no valid role is found
    return res.status(400).json({ message: 'Invalid role' });

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};



// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // hide password
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


// Update user
exports.updateUser = async (req, res) => {
  try {
    const { name, phone, profile_image } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, phone, profile_image },
      { new: true }
    ).select('-password');

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
