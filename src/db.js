import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handdleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", erorr);

db.on("error", handleError);
db.once("open", handdleOpen);
