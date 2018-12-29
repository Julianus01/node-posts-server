import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  creatorId: String,
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now() }
})

export default mongoose.model('Post', postSchema)