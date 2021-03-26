import React from "react";
import DogBox from "../components/Jobs/DogBox";
import Job from "../components/Jobs/Job";
import Layout from "../components/layout/Layout";
import useJob from '../hooks/useJob';

const Jobs = () => {

  const { jobs } = useJob('create');

  return (
    <Layout>
      <div className="jobs-container">
        <div>
          <div className="title-today-list">
            <h2 className="title-component-h">Jobs</h2>
          </div>
          {jobs.map(job => (
            <Job key={job.id} job={job}/>
          ))}
        </div>
        <div>
          <DogBox />
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
