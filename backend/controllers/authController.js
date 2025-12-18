import User from '../models/User.js';

// Note: This is simplified. Passwords are stored plaintext for demo only.
// In production, use bcrypt and proper auth.
export async function register(req,res){
  try{
    const {username,email,password} = req.body;
    const user = new User({username,email,password});
    await user.save();
    res.status(201).json({ok:true, userId:user._id});
  }catch(err){
    res.status(400).json({ok:false, error: err.message});
  }
}

export async function login(req,res){
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user) return res.status(401).json({ok:false, error:'Invalid credentials'});
    res.json({ok:true, userId:user._id});
  }catch(err){
    res.status(500).json({ok:false, error: err.message});
  }
}
