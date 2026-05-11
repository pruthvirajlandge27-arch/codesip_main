import mongoose from 'mongoose';

const openingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  companyName: { type: String, required: true, default: 'Unknown' },
  description: { type: String, required: true },
  redirect_url: { type: String, required: true },
  is_active: { type: Boolean, default: true },
}, { timestamps: true });

const Opening = mongoose.model('Opening', openingSchema);
export default Opening;
