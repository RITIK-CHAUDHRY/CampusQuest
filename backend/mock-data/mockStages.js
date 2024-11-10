const mockStages = [
  {
    name: "Stage 1: Find the Library",
    description: "Go to the main library and take a picture of the front door.",
    order: 1,
    challenge: {
      type: "photo",
      question: null,
      answer: null,
      photoRequirement: "photo of the library front door",
      taskDescription: null,
    },
    location: {
      type: "Point",
      coordinates: [-73.9857, 40.7484], // Longitude, Latitude for example location (e.g., New York)
    },
  },
  {
    name: "Stage 2: Solve the Puzzle",
    description: "Answer the following quiz question correctly to proceed.",
    order: 2,
    challenge: {
      type: "quiz",
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      photoRequirement: null,
      taskDescription: null,
    },
    location: {
      type: "Point",
      coordinates: [-73.9857, 40.7494], // Slightly different coordinates for this stage
    },
  },
  {
    name: "Stage 3: The Hidden Garden",
    description: "Find a red flower in the garden and take a picture.",
    order: 3,
    challenge: {
      type: "task",
      question: null,
      answer: null,
      photoRequirement: null,
      taskDescription: "Find a red flower in the garden and take a photo.",
    },
    location: {
      type: "Point",
      coordinates: [-73.9822, 40.7462],
    },
  },
];

export default mockStages;
