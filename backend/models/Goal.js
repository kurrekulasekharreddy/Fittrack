import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  dailyCalories: {type:Number, default:2000},
  dailyWorkoutMinutes: {type:Number, default:30}
});

export default mongoose.model('Goal', GoalSchema);
