import Meal from '../models/Meal.js';

export async function createMeal(req,res){
  try{
    const m = new Meal(req.body);
    await m.save();
    res.status(201).json(m);
  }catch(err){
    res.status(400).json({error:err.message});
  }
}

export async function getMeals(req,res){
  try{
    const {userId} = req.query;
    const q = userId ? {userId} : {};
    const list = await Meal.find(q).sort({date:-1});
    res.json(list);
  }catch(err){
    res.status(500).json({error:err.message});
  }
}

export async function updateMeal(req,res){
  try{
    const m = await Meal.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(m);
  }catch(err){
    res.status(400).json({error:err.message});
  }
}

export async function deleteMeal(req,res){
  try{
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ok:true});
  }catch(err){
    res.status(400).json({error:err.message});
  }
}
