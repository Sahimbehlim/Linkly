import { User } from "../models/user.model.js";
import { asyncHandler, ApiError, ApiResponse } from "../utils/index.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body || {};

  if (
    [fullName, email, password].some((field) => field?.trim() === "" || !field)
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const newUser = await User.create({ fullName, email, password });

  if (!newUser) {
    throw new ApiError(500, "Failed to register new user");
  }

  return res.status(201).json(new ApiResponse("User registered successfully"));
});

export { registerUser };
