import mockStages from "./mockStages.js";

const mockHunts = [
  {
    name: "Campus Scavenger Hunt",
    description: "Explore the campus and complete challenges to win!",
    creator: "60b8f2d9a5e8a6b8d63b6fb2", // Reference to the creator (User ID)
    isPredefined: true, // Set to true for predefined hunts
    stages: mockStages, // Embedded stages
    geolocation: {
      type: "Point",
      coordinates: [-73.9857, 40.7484], // Coordinates of the hunt location (e.g., campus center)
    },
  },
  {
    name: "Nature Hunt",
    description:
      "A scavenger hunt that takes you through the beautiful campus garden.",
    creator: "60b8f2d9a5e8a6b8d63b6fb3", // Another user ID
    isPredefined: false, // This one is user-generated
    stages: mockStages, // Embed the same mock stages (or modify them as needed)
    geolocation: {
      type: "Point",
      coordinates: [-73.9876, 40.749], // Coordinates of the hunt location (e.g., garden)
    },
  },
];

export default mockHunts;
