import mongoose from "mongoose";
const Schema = mongoose.Schema;
export const ChallengeSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["quiz", "photo", "task"],
      required: true,
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    photoRequirement: {
      type: String,
    },
    taskDescription: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Challenge", ChallengeSchema);
