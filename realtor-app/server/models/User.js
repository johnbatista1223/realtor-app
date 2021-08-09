const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')
const withAuth = require('../utils/auth');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },
    password: {

      type: String,
      required: true

    }
  }
);



userSchema.pre("save", async function (next) {

  if (!this.isModified("password")) return next()
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch {
    return next(error)
  }

})

const User = model('User', userSchema);



module.exports = User;
