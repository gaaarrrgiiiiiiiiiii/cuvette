export default function UpdateJob(){
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form>
            <h2>
                Update Job
            </h2>
            <div className="mb-2">
              <label htmlFor="">Job</label> 
              <input type="text" placeholder='Enter Job' className='form-control' />
            </div>
            <div className="mb-2">
              <label htmlFor="">Company</label> 
              <input type="text" placeholder='Enter Company' className='form-control' />
            </div>
            <div className="mb-2">
              <label htmlFor="">Location</label> 
              <input type="text" placeholder='Enter Location' className='form-control' />
            </div>
            <div className="mb-2">
              <label htmlFor="">Job_Offer</label> 
              <input type="text" placeholder='Enter Job Offer' className='form-control' />
            </div>
            <div className="mb-2">
              <label htmlFor="">Start_Date</label> 
              <input type="text" placeholder='Enter Start Date' className='form-control' />
            </div>
            <div className="mb-2">
              <label htmlFor="">Openings</label> 
              <input type="number" placeholder='Enter Openings' className='form-control' />
            </div>
            <button className="btn btn-success">Update</button>
          </form>

        </div>
        
      </div>
    </>
    
  )
}

