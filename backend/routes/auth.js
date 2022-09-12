const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchUser = require("../middleware/fetchUser");
const JWT_SECRET = "not worthy";

// Route:1 for createlogin

router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "enter atleast 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    // for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether user with email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(200)
          .json({ success, error: "user with email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({ err: "please enter unique email" });
      //   });
      const data = {
        user: {
          id: user.id,
        },
      };

      var authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occurred");
    }
  }
);

//Route:2 authenticate a user using no login required
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "can not be empty").exists(),
  ],
  async (req, res) => {
    let success = false;
    // for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (!user) {
        success = false
        return res
          .status(404)
          .json({ errors: "please enter valid credentials" });
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        success = false
        return res

          .status(404)
          .json({ success, errors: "please enter valid credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      var authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error occurred");
    }
  }
);

// for get user data
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error occurred");
  }
});
module.exports = router;
