import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_URI } from "./config.js";
import bookRouter from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
//Middleware For parsing json objects
app.use(express.json());

//CORS Middleware, default value allows all origins
app.use(cors());
// to allow custom origins, replace * with the origin
// app.use(cors({
//   origin: "https://localhost:3000",
//   methods: "GET,POST,PUT,DELETE",
//   allowedHeaders: "Content-Type"
// }));

//Default route
app.get('/', (req,res) => {
  res.send(" Welcome to the Book Store ");
});

//Router for routing book API
app.use('/books', bookRouter);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));    
  })
  .catch((error) => console.log(error.message));


