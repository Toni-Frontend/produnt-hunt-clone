import Link from "next/link";
import React from "react";
import { css } from "styled-components";
import useJob from "../../hooks/useJob";
import { StyledHiring, StyledButtonAll } from "../UI/StyledHiringNow";

const HiringNow = () => {
  const { jobs } = useJob("create");
  const jobHiring = jobs.slice(0, 3);

  return (
    <StyledHiring>
      <h2 className="title-component-h">Hiring Now</h2>
      <div className="container-hiringnow">
        {jobHiring.map((job) => (
          <div key={job.id} className="row-hiring">
            <div className="hiring-text">
              <h2>{job.company}</h2>
              <h3>{job.jobtitle}</h3>
              <p>{job.location}</p>
            </div>
            <div className="hiring-logo">
              <img src={job.logocompany} alt="logo empresa" />
            </div>
          </div>
        ))}
        <Link href="/jobs">
          <StyledButtonAll>all jobs</StyledButtonAll>
        </Link>
        <div className="post-a-job">
          <p>Hiring?</p>
          <Link href="/post-job">
            <a css={css`
              color: #da552f;
            `}>
              Post a Job
            </a>
          </Link>
        </div>
      </div>
    </StyledHiring>
  );
};

export default HiringNow;
