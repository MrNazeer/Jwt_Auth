const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const JWT_SECRET = "Learing_Jwt_Auth_";

const orgPass = "12345";

router.post("/signin", async (req, res) => {
  const {email, pass} = req.body;

  if (email !== "nazeer@gmail.com") {
    return res.status(400).json({
      message: "Invalid userName",
    });
  }

  const match = bcrypt.compare(orgPass, pass);

  if (!match) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }
  const token = jwt.sign({email: email}, JWT_SECRET, {expiresIn: "15m"});

  res.json({token, data: {message: "User Authorised", email: email}});
});

const verifyToken = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(400).json({message: "Token Missing, Invalid user"});
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded", decoded);
    req.body = decoded;
    next();
  } catch (error) {
    res.status(400).json({message: "Token is not valid"});
  }
};

router.get("/profile", verifyToken, async (req, res) => {
  console.log(req.body);
  res.json({
    message: "legit",
    data: {
      email: req.body.email,
    },
  });
});

module.exports = router;
