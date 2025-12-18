import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User', required:true},
  type: {type:String, required:true},
  duration: {type:Number, required:true},
  calories: {type:Number, default:0},
  date: {type:Date, default: Date.now},
  notes: {type:String}
});

export default mongoose.model('Workout', WorkoutSchema);
