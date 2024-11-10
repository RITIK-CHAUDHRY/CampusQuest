import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "",
  },
  regNo: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "",
  },
  phone: {
    type: Number,
    trim: true,
    maxlength: 20,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "lastName",
  },
  type: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "student",
  },
  createdHunts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hunt",
    },
  ],
  joinedHunts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hunt",
    },
  ],
  progress: [
    {
      huntId: {
        type: Schema.Types.ObjectId,
        ref: "Hunt",
      },
      stagesCompleted: [
        {
          stageId: {
            type: Schema.Types.ObjectId,
            ref: "Stage",
          },
          timestamp: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
  createdHunts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hunt",
    },
  ],
  joinedHunts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hunt",
    },
  ],
  progress: [
    {
      huntId: {
        type: Schema.Types.ObjectId,
        ref: "Hunt",
      },
      stagesCompleted: [
        {
          stageId: {
            type: Schema.Types.ObjectId,
            ref: "Stage",
          },
          timestamp: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
