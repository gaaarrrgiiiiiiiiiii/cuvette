import { useState } from "react"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
export default function Jobs(){

  const [Jobs, setJobs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5174')
    .then(result => setJobs(result.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-100 bg-white rounded p-3'>
          <Link to="/CreateJob" className="btn btn-success">Add + </Link>
          <table className="table">
            <thread>
              <tr>
                <th> Job</th>
                <th>Company</th>
                <th>Location</th>
                <th>Job_Offer</th>
                <th>Start_Date</th>
                <th>Openings</th>
                <th>Action</th>
                
              </tr>
            </thread>
            <tbody>
              {
                Jobs.map((Job) => {
                  return <tr>
                    <td>{Job.Job}</td>
                    <td>{Job.Company}</td>
                    <td>{Job.Location}</td>
                    <td>{Job.Job_Offer}</td>
                    <td>{Job.Start_Date}</td>
                    <td>{Job.Openings}</td>
                    <td>
                      <Link to="/UpdateJob" className="btn btn-success">Update</Link>
                      <button className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
          
          

        </div>
        
      </div>
    </>
    
  )
}