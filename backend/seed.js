import mongoose from "mongoose";
import User from "./models/User.js";
import mockUsers from "./mock-data/mockUsers.js";
import dotenv from "dotenv";
import Hunt from "./models/Hunt.js";
import Challenge from "./models/Challenge.js";
import Stage from "./models/Stage.js";
import mockChallenges from "./mock-data/mockChallenges.js";
import mockStages from "./mock-data/mockStages.js";
import mockHunts from "./mock-data/mockHunts.js";
import dbInit from "./db/connect.js";
dotenv.config();

async function seedDatabase() {
  try {
    await dbInit(process.env.MONGO_URL);

    console.log("Connected to MongoDB...");

    await User.deleteMany({});
    await Hunt.deleteMany({});
    await Stage.deleteMany({});
    await Challenge.deleteMany({});

    const insertedChallenges = await Challenge.insertMany(mockChallenges);

    mockStages.forEach((stage) => {
      stage.challenge = insertedChallenges.find(
        (challenge) => challenge.question === stage.challenge.question
      );
    });

    const insertedStages = await Stage.insertMany(mockStages);

    mockHunts.forEach((hunt) => {
      hunt.stages = insertedStages.map((stage) => stage._id);
    });

    const insertedHunts = await Hunt.insertMany(mockHunts);

    mockUsers.forEach((user, index) => {
      user.createdHunts = [insertedHunts[index]._id];
      user.joinedHunts = [insertedHunts[index]._id];
    });

    await User.insertMany(mockUsers);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding the database:", err);
  }
}

seedDatabase();
