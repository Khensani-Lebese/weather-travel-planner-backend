const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "No token, authorization denied" });
  }
};

// @route GET /api/favorites
//  Get user favorites
router.get("/", protect, async (req, res) => {
  res.json(req.user.favorites);
});

// @route POST /api/favorites
// Add a favorite
router.post("/", protect, async (req, res) => {
  const { city, weatherData } = req.body;
  req.user.favorites.push({ city, weatherData });
  await req.user.save();
  res.status(201).json(req.user.favorites);
});

// @route DELETE /api/favorites/:id
// Remove a favorite
router.delete("/:id", protect, async (req, res) => {
  req.user.favorites = req.user.favorites.filter(
    (fav) => fav._id.toString() !== req.params.id
  );
  await req.user.save();
  res.json(req.user.favorites);
});

// @route GET /api/auth/users
// @desc Get the authenticated user's data and all users
// @access Private
router.get("/users", protect, async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();

    // Fetch the authenticated user (accessible via req.user from the middleware)
    const authenticatedUser = await User.findById(req.user);

    res.status(200).json({ authenticatedUser, users }); // Return both the authenticated user and all users
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
