import mongoose from "mongoose";
import { StageSchema } from "./Stage.js";
const Schema = mongoose.Schema;

// Main Hunt schema
export const HuntSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPredefined: {
      type: Boolean,
      default: false,
    },
    stages: [StageSchema],
    geolocation: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
  },
  { timestamps: true }
);

HuntSchema.index({ geolocation: "2dsphere" }); // Geospatial index for the hunt's location
StageSchema.index({ location: "2dsphere" }); // Geospatial index for stage locations

export default mongoose.model("Hunt", HuntSchema);
