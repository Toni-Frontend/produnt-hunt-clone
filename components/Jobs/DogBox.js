import React from "react";
import Link from "next/link";
import { StyledDogBox } from "../UI/StyledDogBox";

const DogBox = () => {
  return (
    <StyledDogBox>
      <div className="logo-dog">
        <img src="/static/img/dog.png" alt="" />
      </div>
      <div className="content-text-dog-box">
        <h4>Are you hiring?</h4>
        <p>Advertise from $299</p>
        <Link href="/post-job">
          <a>post a job</a>
        </Link>
      </div>
    </StyledDogBox>
  );
};

export default DogBox;
