import Goal from '../models/Goal.js';

export async function getGoal(req,res){
  try{
    const {userId} = req.query;
    const g = await Goal.findOne({userId});
    res.json(g);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}

export async function upsertGoal(req,res){
  try{
    const {userId} = req.body;
    const g = await Goal.findOneAndUpdate({userId}, req.body, {new:true, upsert:true});
    res.json(g);
  }catch(err){
    res.status(400).json({error:err.message});
  }
}
