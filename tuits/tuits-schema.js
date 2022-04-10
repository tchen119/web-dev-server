import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  postedBy: {
    username: String
  },
  stats: {
    retuits: Number,
    likes: Number,
    replies: Number
  }
}, {collection: 'tuits'});

export default schema;