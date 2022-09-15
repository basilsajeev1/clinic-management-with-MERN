import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import $ from 'jquery';

const Editclinic = () => {
  const [facility, setFacility] = useState([])
  const { clinicId } = useParams();
  //console.log(clinicId)
  
  useEffect(() => {
    axios.get(`http://localhost:5000/owner/getClinic/${clinicId}`).then((res) => {
      //console.log(res.data)
      setFacility(res.data.facility)
    }).catch((err) => {
      console.log(err)
    })
        
  }, [])

  return (
    <>
    <div>
      <label>Facility name</label>  <input type="text" value={facility.name}></input><br></br>
      <label>Location</label>  <input type="text" value={facility.location}></input><br></br>
      <label>Pincode</label>  <input type="text" value={facility.pincode}></input><br></br>
      <label>Facility Type</label>  <select id="facType"><option value="clinic">Clinic</option>  <option value="hospital">Hospital</option></select><br></br>
      <label>Registration Number</label>  <input type="text" value={facility.regNumber}></input><br></br>
      <label>Email</label>  <input type="email" value={facility.email}></input><br></br>
      <label>Working Hours</label>  <input type="number" value={facility.workHours}></input><br></br>
      <label>Starting Patient Registration Number</label>  <input type="text" value={facility.startPatRegNum}></input><br></br>
      <label>Category</label>  <select id="category" ><option value="allopathy">Allopathy</option>  <option value="homeopathy">Homeopathy</option></select><br></br>
      <label>GST Number</label>  <input type="text" value={facility.gstNum}></input><br></br>
      <label>Address</label>  <textarea value={facility.address}></textarea><br></br>

      <button>Submit</button> &nbsp;  <button>Cancel</button>
    </div>
    </>
  )
}

export default Editclinic
