import { mongoose } from "mongoose";

const mongoBDuri = process.env.REACT_APP_MongoUri;

export const mongoBDStart = async () => {
  console.log(mongoBDuri);
  try {
    await mongoose.connect(mongoBDuri);
    mongoose.connect();
  } catch (e) {
    console.log("Server error:", e.message);
  }
};
