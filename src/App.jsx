import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import Header from './components/Header';
import api from './utiles/api';
import { setError, setJobs, setLoading } from './app/slices/jobSlice';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  const getJobs=()=>{
    dispatch(setLoading())

    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)))
  }


  useEffect(() => {
   getJobs();

  }, []);

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<JobList retry={getJobs} />} />
        <Route path={'/new'} element={<AddJob />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App