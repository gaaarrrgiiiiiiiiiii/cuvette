import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateJob(){
  const [Job, setJob] = useState()
  const [Company, setCompany] = useState()
  const [Location, setLocation] = useState()
  const [Job_Offer, setJob_Offer] = useState()
  const [Start_Date, setStart_Date] = useState()
  const [Openings, setOpenings] = useState()
  const navigate = useNavigate()


  const Submit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:5174/CreateJob", {Job, Company, Location, Job_Offer, Start_Date, Openings})

    .then(result => {
      console.log(result)
      navigate('/Jobs')
    })
    .catch(err => console.log(err))
  }

  return (
    
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={Submit}>
            <h2>
              Add Job
            </h2>
            <div className="mb-2">
              <label htmlFor="">Job</label> 
              <input type="text" placeholder='Enter Job' className='form-control' 
              onChange={(e) => setJob(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="">Company</label> 
              <input type="text" placeholder='Enter Company' className='form-control' 
              onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="">Location</label> 
              <input type="text" placeholder='Enter Location' className='form-control'
              onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Job_Offer</label> 
              <input type="text" placeholder='Enter Job Offer' className='form-control' 
              onChange={(e) => setJob_Offer(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="">Start_Date</label> 
              <input type="text" placeholder='Enter Start Date' className='form-control'
              onChange={(e) => setStart_Date(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="">Openings</label> 
              <input type="number" placeholder='Enter Openings' className='form-control' 
              onChange={(e) => setOpenings(e.target.value)}/>
            </div>
            <button className="btn btn-success">Submit</button>
          </form>

        </div>
        
      </div>
    </>
    
  )
}