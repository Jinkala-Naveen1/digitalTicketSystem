const router = require("express").Router();
const SignUp = require("../models/SignUp");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password,salt)
      const newUser = new SignUp({
      username: req.body.username,
      email: req.body.email,
      password:hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});


// LOGIN Endpoint
router.post("/login", async (req, res) => {
  try {
    // Find the user by email (or username if you prefer)
    const user = await SignUp.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("User not found!"); // If user doesn't exist
    }

    // Compare entered password with hashed password in the database
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json("Wrong password!"); // If password is incorrect
    }

    // Password is correct; respond with user details (excluding the password)
    const { password, ...otherDetails } = user._doc;
    res.status(200).json({
      message: "Login successful!",
      user: otherDetails,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json("An error occurred. Please try again.");
  }
});

module.exports = router;