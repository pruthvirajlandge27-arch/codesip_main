import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional, can be a guest
  name: { type: String, required: true },
  email: { type: String, required: true },
  serviceType: { type: String, required: true, enum: ['web_development', 'ai_automation', 'consulting', 'other'] },
  budget: { type: String },
  details: { type: String, required: true },
  status: { type: String, enum: ['new', 'contacted', 'in_progress', 'completed'], default: 'new' }
}, { timestamps: true });

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
export default ServiceRequest;
