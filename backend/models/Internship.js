import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true }, // e.g., '3 Months', '6 Months'
  stipend: { type: String, default: 'Unpaid' },
  requirements: [{ type: String }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Internship = mongoose.model('Internship', internshipSchema);
export default Internship;
