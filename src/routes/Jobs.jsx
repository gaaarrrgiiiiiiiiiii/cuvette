import { useState, useEffect } from "react"; // Combine useState and useEffect imports
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios to make HTTP requests

export default function Jobs() {
  const [jobs, setJobs] = useState([]); // Rename Jobs to jobs to follow naming conventions

  useEffect(() => {
    axios.get('http://localhost:5174')
      .then(result => {
        // Check if the result.data is an array before setting it to state
        if (Array.isArray(result.data)) {
          setJobs(result.data);
        } else {
          console.error('Fetched data is not an array:', result.data);
          setJobs([]); // Default to an empty array if data is not an array
        }
      })
      .catch(err => {
        console.log(err);
        setJobs([]); // Default to an empty array in case of error
      });
  }, []);

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className='w-100 bg-white rounded p-3'>
          <Link to="/CreateJob" className="btn btn-success">Add + </Link>
          <table className="table">
            <thead> {/* Correct typo from <thread> to <thead> */}
              <tr>
                <th>Job</th>
                <th>Company</th>
                <th>Location</th>
                <th>Job Offer</th> {/* Remove underscore for consistency */}
                <th>Start Date</th> {/* Remove underscore for consistency */}
                <th>Openings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job, index) => { // Rename Job to job and add index for key prop
                  return (
                    <tr key={index}> {/* Add key prop */}
                      <td>{job.Job}</td>
                      <td>{job.Company}</td>
                      <td>{job.Location}</td>
                      <td>{job.Job_Offer}</td>
                      <td>{job.Start_Date}</td>
                      <td>{job.Openings}</td>
                      <td>
                        <Link to="/UpdateJob" className="btn btn-success">Update</Link>
                        <button className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}