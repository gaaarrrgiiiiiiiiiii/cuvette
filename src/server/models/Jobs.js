const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
  Job:String,
  Company:String,
  Location:String,
  Job_Offer:String,
  Start_Date:String,
  Openings:Number,

})

const JobModel = mongoose.model("Jobs", JobSchema)
module.exports= JobModel