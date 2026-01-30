const express = require('express');
const { registerUser, LoginUser,getUser,updateProfile,deleteUser } = require('../controllers/user.controller.js');
const protected = require('../middlewares/auth.js');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', LoginUser);
router.get('/profile',protected,getUser);
router.put('/profile',protected,updateProfile);
router.delete('/profile',protected,deleteUser);

module.exports = router;