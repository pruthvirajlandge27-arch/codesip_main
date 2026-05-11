import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional, for logged-in users
  internship: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship' }, // Optional, strict reference
  
  // Public application fields
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  domain: { type: String, required: true }, // Which internship domain they applied for
  
  resumeLink: { type: String, required: true },
  coverLetter: { type: String },
  status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
export default Application;
