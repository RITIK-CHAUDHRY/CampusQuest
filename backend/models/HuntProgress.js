const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  users: { type: [String], ref: 'User', required: true },  
  progress: [{
    stage_number: { type: Number, required: true }, 
    status: { type: String, enum: ['not-started', 'in-progress', 'completed', 'failed'], default: 'not-started' },  
    completion_time: { type: Date, default: null },  
    hints_used: { type: Number, default: 0 }  
  }],
},{timestamps:true});

progressSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
