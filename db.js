const mongoose = require("mongoose");
//Set up default mongoose connection
const mongoURI = "mongodb://127.0.0.1:27017/iNotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to MongoDB successfully.");
  });
};



module.exports=connectToMongo;
