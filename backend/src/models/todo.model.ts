import mongoose, { Schema } from 'mongoose';

const ToDoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
});

export default mongoose.model('todos', ToDoSchema);
