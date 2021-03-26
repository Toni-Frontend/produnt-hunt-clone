import React from "react";
import { StyledHeadStorie } from "../UI/StyledHeadStorie";

const HeadStorie = () => {
  return (
    <StyledHeadStorie>
      <div className="img-head-storie">
        <img src="/static/img/girl.png" />
      </div>
      <div className="content-head-storie">
        <h2>12 more deals to build your tech stack</h2>
        <div className="user-and-date">
          <div className="img-user">
            <img src="/static/img/boy.png" />
          </div>
          <p className="by-user">BY SARAH WRYGHT</p>
          <p className="date-blog">2 MIN READ</p>
        </div>
        <p className="subtitle-blog">
          Save money on your bookkeeping and tax support, code review tools, and
          more.
        </p>
      </div>
    </StyledHeadStorie>
  );
};

export default HeadStorie;
