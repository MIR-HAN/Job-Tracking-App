import React from 'react'
import DelBtn from './DelBtn'
import { MdLocationOn } from 'react-icons/md'
import { FaSuitcase } from 'react-icons/fa'
import { BsFillCalendarDateFill } from 'react-icons/bs'


const Card = ({ job }) => {
console.log(job)
const colors ={
  Interview:"skyblue",
  Rejected:'red',
  Application:"orange",
  Offer:"green"
};

  return (
    <div className='card'>
      <div className='head'>
        <section>
          <div className='letter'>
            {        /* get first letter */}
            <span>{job.company[0]}</span>
          </div>

          <div className='info'>
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <DelBtn id={job.id} />
        </section>
      </div>

      <div className='body'>
        <div className='field'>
          <MdLocationOn />
          <p>{job.location}</p>
        </div>
        <div className='field'>
          < FaSuitcase />
          <p>{job.type}</p>
        </div>
        <div className='field'>
          <BsFillCalendarDateFill />
          <p>{job.date}</p>
        </div>

        <div className='status'>
          <p style={{
            background: colors[job.status]
          }}>{job.status}</p>
        </div>
      </div>

    </div>
  )
}

export default Card