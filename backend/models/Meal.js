import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  name: {type:String, required:true},
  calories: {type:Number, default:0},
  protein: {type:Number, default:0},
  carbs: {type:Number, default:0},
  fat: {type:Number, default:0},
  date: {type:Date, default: Date.now}
});

export default mongoose.model('Meal', MealSchema);
