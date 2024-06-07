import React from 'react'
import AutoInput from '../components/AutoInput';
import { statusOpt, typeOpt } from '../constants';
import { v4 } from 'uuid';
import api from '../utiles/api';
import { toast } from 'react-toastify';
import { createJob } from '../app/slices/jobSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from '../components/Select';
import SubmitBtn from '../components/SubmitBtn';


const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //while submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    //create from data
    const formData = new FormData(e.target);
    //create an object with form data

    const newJobData = Object.fromEntries(formData.entries());
    // add id and date

    newJobData.id = v4();
    newJobData.date = new Date().toLocaleDateString();
    // add new data to api
    api
      .post('jobs', newJobData)
      .then(() => {
        //notification
        toast.success("New job added successfully")
        //add new data to store
        dispatch(createJob(newJobData))
        //back to home page
        navigate("/")
      })
      .catch(() => {
        //send notification if error eccure
        toast.error("An problem accured")
      })

  };

  return (
    <div className='add-page'>
      <section className='container'>
        <h2>Add New Job</h2>

        <form onSubmit={handleSubmit}>
          <AutoInput label={"Position"} name="position" />
          <AutoInput label={"Company"} name="company" />
          <AutoInput label={"Location"} name="location" />

          <Select label={"Status"} options={statusOpt} name={"status"} />
          <Select label={"Ttype"} options={typeOpt} name={"type"} />

          <div>
            <SubmitBtn text={"Submit"} />
          </div>
        </form>

      </section>
    </div>
  )
}

export default AddJob;