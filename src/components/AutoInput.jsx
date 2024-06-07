import React from 'react'
import { useSelector } from 'react-redux'

const AutoInput = ({ label, name }) => {

  const {jobs}=useSelector((store) => store);
  
    //remove repeated positions
 const arr= jobs.map((job)=> job[name] )

 const options = [...new Set(arr)]

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input list={name} id={label} type="text" name={name} required />

      <datalist id={name}>
       {options.map((i, index)=> (
        <option  key={index} value={i}></option>
       ))}
      </datalist>
    </div>
  )
}

export default AutoInput