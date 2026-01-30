const User=require('../schema/user');
const jwt=require('jsonwebtoken');

// Generate JWT Token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
}

// Register User
const registerUser=async(req,res)=>{
    try{
         console.log("REQ BODY:", req.body)
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all fields"});
        }

        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});
        }

        const user=await User.create({name,email,password});
        if(user){
            res.status(201).json({
                message:"User registered successfully",
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id)
            });
        }        else{
            res.status(400).json({message:"Invalid user data"});
        }
    }
    catch (error) {
  console.error("REGISTER ERROR FULL:", error);
  res.status(500).json({
    message: "Server error",
    error: error.message
  });
}
}

//Login User

const LoginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please fill all fields"});
        }
        const userExists=await User.findOne({email});
        if(!userExists){
            return res.status(400).json({message:"Invalid email or password"});
        }
        
        const isPasswordMatch = await userExists.matchPassword(password);
        if(!isPasswordMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }
        
        res.status(200).json({
            message:"User logged in successfully",
            _id:userExists._id,
            name:userExists.name,
            email:userExists.email,
            token:generateToken(userExists._id)
        });
        
    }
    catch(err){
        console.error("LOGIN ERROR FULL:", err);
  res.status(500).json({
    message: "Server error",
    error: err.message
  });
    }
}

const getUser=async(req,res)=>{
    const user=await User.findById(req.user).select('-password');
    res.json(user);
}

const updateProfile=async(req,res)=>{
    const user=await User.findById(req.user);

    if(!user) return res.status(404).json({message:"User not found"});

    user.name=req.body.name || user.name;
    user.email=req.body.email || user.email;

    const updatedUser=await user.save();
    res.json({
        _id:updatedUser._id,
        name:updatedUser.name})
}

const deleteUser=async(req,res)=>{
    await User.findByIdAndDelete(req.user);
    res.json({message:"User deleted successfully"});
}


module.exports={registerUser,LoginUser,getUser,updateProfile,deleteUser};
