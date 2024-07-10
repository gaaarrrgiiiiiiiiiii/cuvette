const express = require("express")
const mongoose = require("mongoose")
const cors= require("cors")
const JobModel = require('./models/Jobs')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/')

app.post("/CreateJob", (req,res) =>{
  JobModel.create(req.body)
  .then (Jobs => res.json(Jobs))
  .catch(err => res.json(err))
})

app.listen(5174, () => {
  console.log("Server is running")
})