import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

/**
 * Shape a user document for API responses (omits password, exposes essentials).
 */
const toAuthResponse = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  profileCompleted: user.profileCompleted,
  roleLabel: user.roleLabel,
});

/**
 * @route   POST /api/auth/signup
 * @desc    Register a new user (Signup page) and return a JWT.
 * @access  Public
 *
 * Flow: Signup -> (profileCompleted=false) -> frontend redirects to Complete Profile.
 */
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required.' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }
    if (confirmPassword !== undefined && password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }

    const user = await User.create({
      name,
      email,
      password,
      // Pre-fill personal details from signup so the profile form has a head start
      personalDetails: { fullName: name },
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      message: 'Account created successfully! Welcome to EcoMatch.',
      token,
      user: toAuthResponse(user),
    });
  } catch (error) {
    // Handle duplicate key / validation errors gracefully
    if (error.code === 11000) {
      return res.status(409).json({ message: 'An account with this email already exists.' });
    }
    if (error.name === 'ValidationError') {
      const msg = Object.values(error.errors)[0]?.message || 'Invalid input.';
      return res.status(400).json({ message: msg });
    }
    console.error('Signup error:', error);
    return res.status(500).json({ message: 'Server error during signup.' });
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate a user (Sign In page) and return a JWT.
 * @access  Public
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // password has select:false in the schema, so explicitly include it here
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      message: 'Welcome back! Successfully logged in.',
      token,
      user: toAuthResponse(user),
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login.' });
  }
};

/**
 * @route   GET /api/auth/me
 * @desc    Return the currently authenticated user (used to decide routing:
 *          dashboard vs. complete-profile).
 * @access  Private
 */
export const getMe = async (req, res) => {
  // req.user is attached by the `protect` middleware
  return res.status(200).json({ user: req.user });
};
