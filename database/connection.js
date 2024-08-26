import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_PORTAL_WITH_AUTOMATION",
    })
    .then(() => {
      console.log("Connected to database Succesfully");
    })
    .catch((err) => {
      console.log(`Some error occured while  connecting to database:${err}`);
    });
};
