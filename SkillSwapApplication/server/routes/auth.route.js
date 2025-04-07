import express from "express";
const { signup, signin } = require('../controllers/auth.controllers.js');


const router = express.Router();

router.get("/signup", signup);
router.get("/signin", signin);

export default router;