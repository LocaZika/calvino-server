import { Schema, model } from 'mongoose';

const pricingPlan = {
  createAt: Date,
  updateAt: Date,
};
const pricingPlanSchema = new Schema<>(pricingPlan, { timestamps: true });
export const pricingPlanModel = model('pricingPlan', pricingPlanSchema);
