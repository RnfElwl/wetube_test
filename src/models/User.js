import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true },
  password: { type: String },
  name: { type: String, required: true },
  locatoin: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 6);
});

const User = mongoose.model("User", userSchema);

export default User;
