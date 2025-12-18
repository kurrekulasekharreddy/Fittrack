import Workout from '../models/Workout.js';

export async function createWorkout(req,res){
  try{
    const w = new Workout(req.body);
    await w.save();
    res.status(201).json(w);
  }catch(err){
    res.status(400).json({error:err.message});
  }
}

export async function getWorkouts(req,res){
  try{
    const {userId} = req.query;
    const q = userId ? {userId} : {};
    const list = await Workout.find(q).sort({date:-1});
    res.json(list);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}

export async function getWorkout(req,res){
  try{
    const w = await Workout.findById(req.params.id);
    res.json(w);
  }catch(err){
    res.status(404).json({error:err.message});
  }
}

export async function updateWorkout(req,res){
  try{
    const w = await Workout.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(w);
  }catch(err){
    res.status(400).json({error:err.message});
  }
}

export async function deleteWorkout(req,res){
  try{
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ok:true});
  }catch(err){
    res.status(400).json({error:err.message});
  }
}
