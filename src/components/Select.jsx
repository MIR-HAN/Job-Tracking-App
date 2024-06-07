import React from 'react'

const Select = ({label,options,handleChange,name}) => {
  
  return (
    <div>
        <label>{label}</label>
        <select onChange={handleChange } name={name} id="">
        <option selected hidden value="">Select</option>
            {options.map((i)=> <option key={i} value={i}>{i}</option>)}
        </select>
    </div>
  )
}

export default Select