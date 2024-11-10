const mockUsers = [
  {
    username: "john_doe",
    email: "john@example.com",
    password_hash: "hashedpassword123",
    createdHunts: ["60b8f2d9a5e8a6b8d63b6fb2"],
    joinedHunts: ["60b8f2d9a5e8a6b8d63b6fb2"],
    progress: [
      {
        huntId: "60b8f2d9a5e8a6b8d63b6fb2",
        stagesCompleted: [
          {
            stageId: "60b8f2d9a5e8a6b8d63b6fb3",
            timestamp: new Date("2024-10-01T12:00:00Z"),
          },
        ],
      },
    ],
  },
  {
    username: "jane_smith",
    email: "jane@example.com",
    password_hash: "hashedpassword456",
    createdHunts: [],
    joinedHunts: ["60b8f2d9a5e8a6b8d63b6fb2"],
    progress: [],
  },
];

export default mockUsers;
