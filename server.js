//  import mongoose from "mongoose";

 import app from "./app.js";

// const { DB_HOST, PORT = 8000 } = process.env;
// console.log(process.env.DB_HOST)

// mongoose.connect(DB_HOST)
//   .then(()=> {
//     app.listen(PORT, () => {
//       console.log("Database connection successful")
//     })
//   })
//   .catch(error => {
//     console.log(error.message);
//     process.exit(1);
//   })
  



 import mongooConnect from "./db/conection.js"; 

const { PORT=8000 } = process.env;

const startServer = async () => {
  try {
    await mongooConnect();
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();


