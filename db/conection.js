import mongoose from "mongoose";

const { DB_HOST } = process.env;

const mongooConect = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("conected");
  } catch (error) {
    console.log(error);
  }
};

export default mongooConect;