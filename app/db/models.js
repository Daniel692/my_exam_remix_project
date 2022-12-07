import { mongoose } from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    starredBy: {
      type: Array,
    },
    postedBy: {
        type: String,
        required: true,
    }, 
  },
  { timestamps: true }
);


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

export const models = [
  {
    name: "Post",
    schema: postSchema,
    collection: "posts",
  },
  {
    name: "User",
    schema: userSchema,
    collection: "users",
  },
];