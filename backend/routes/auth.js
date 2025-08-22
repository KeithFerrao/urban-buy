const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "keithisthebest";

//Route 1 : To create a user
router.post(
  "/createUser",
  [
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password at least 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      let errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      //Destructure the data send by the user (Used to be more simpler the writing big lines)
      const { name, email, password } = req.body;

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "user with this email already exists" });
      }
      //Creating user instance
      user = new User({
        name,
        email,
        password,
      });

      let salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();
      res.json({ msg: "User is successfully created", id: user._id });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error: "Internal Server Error"});
    }
  }
);

//Route 2 : To check if user already exists
router.post(
  "/login",
  [
    body("email").notEmpty().withMessage("Email cannot be empty"),
    body("password").notEmpty().withMessage("Password cannot be empty"),
  ],
  async (req, res) => {
    try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check if email already exists 
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "User does not exist try again" });
      }

      //Check if the passwords match using bcrypt
      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ error: "Password does not match.... try again" });
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      const authToken = jwt.sign(payload,JWT_SECRET, {expiresIn: "1hr"});

      res.json({ success: "Login Successfull !", authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error: "Internal Server Error"});
    }
  }
);

module.exports = router;
