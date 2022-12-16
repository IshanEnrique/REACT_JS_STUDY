const mongoose = require("mongoose");
//Set up default mongoose connection
const mongoURI = "mongodb://localhost:27017";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to MongoDB successfully.");
  });
};



module.exports=connectToMongo;
