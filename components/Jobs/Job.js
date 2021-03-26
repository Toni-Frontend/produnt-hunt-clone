import React from "react";
import Link from "next/link";
import { StyledJob } from "../UI/StyledJob";

const Job = ({ job }) => {
  const { location, company, logocompany, jobtitle } = job;

  return (
    <Link href="/jobs">
      <StyledJob>
        <div className="content-text-job">
          <div className="img-logo-job">
            <img src={logocompany} />
          </div>
          <div className="content-description-job">
            <h2>{company}</h2>
            <p className="rol-job">{jobtitle}</p>
            <p className="location-job">{location}</p>
          </div>
        </div>
        <div className="content-links-job">
          <p>🌎⚒️</p>
          <div>
            <Link href="/jobs">
              <a>share</a>
            </Link>
            <Link href="/jobs">
              <a>apply</a>
            </Link>
          </div>
        </div>
      </StyledJob>
    </Link>
  );
};

export default Job;
