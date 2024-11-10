import mongoose from 'mongoose'

const dbInit = (url) => {
  return mongoose.connect(url)
}
export default dbInit
