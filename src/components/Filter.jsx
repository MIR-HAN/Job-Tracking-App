import React, { useEffect, useState } from 'react';
import Select from './Select';
import { sortOpt, statusOpt, typeOpt } from '../constants';
import SubmitBtn from './SubmitBtn';
import api from '../utiles/api';
import { useDispatch } from 'react-redux';
import { setLoading, setError, setJobs } from '../app/slices/jobSlice';


const Filter = () => {

    const [text, setText] = useState();
    const [debouncedText, setDebouncedText] = useState();
    const [sort, setSort] = useState();
    const [status, setStatus] = useState();
    const [type, setType] = useState();

    const dispatch = useDispatch();


    //debounce
    useEffect(() => {
        if (text === undefined) return;


        const timer = setTimeout(() => setDebouncedText(text), 500)

        return () => {
            clearTimeout(timer)
        }

    }, [text]);

    useEffect(() => {

        const sortParam = sort === "a-z" || sort === "z-a" ? "company" :
            sort === "Newest" || sort === "Oldest" ? "date" : undefined;

        const orderParam = sort === "a-z" ? "asc" : sort === "z-a" ? "desc" :
            sort === "Newest" ? "desc" : sort === "Oldest" ? "asc" : undefined;


        const params = {
            q: text,
            _sort: sortParam,
            _order: orderParam,
            status: status,
            type: type,
        };


        api.get("/jobs", { params })
            .then((res) => dispatch(setJobs(res.data)))
            .catch((err) => dispatch(setError(err.message)))

    }, [debouncedText, sort, type, status])



    //Reset the filter
    const handleReset = (e) => {
        e.preventDefault();
        //Reset states
        setText();
        setDebouncedText();
        setSort();
        setStatus();
        setType();

        //Reset inputs
        e.target.reset();
    }
    return (
        <div className='filter-sec'>
            <h2>Filter Form</h2>

            <form onSubmit={handleReset}>
                <div>
                    <label >Search</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" />
                </div>

                <Select label={'Status'} options={statusOpt} handleChange={(e) => setStatus(e.target.value)} />
                <Select label={'Type'} options={typeOpt} handleChange={(e) => setType(e.target.value)} />
                <Select label={'Sort'} options={sortOpt} handleChange={(e) => setSort(e.target.value)} />

                <div>
                    <SubmitBtn text={"Reset Filter"} />
                </div>
            </form>
        </div>
    )
}

export default Filter;