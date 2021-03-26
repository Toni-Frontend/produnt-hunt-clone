import React from "react";
import { css } from "styled-components";
import { StyledBanner } from "../UI/StyledBanner";

const Banner = () => {
  return (
    <StyledBanner>
      <div className="banner-content">
        <p className="p-job-hunt">Jobs on Product Hunt</p>
        <h3>Hire the Makers behind the best products</h3>
        <div
          css={css`
            height: 1px;
            width: 50%;
            margin-top: 2rem;
            background-color: #fff;
            background: linear-gradient(90deg, #fff, #163d48);
          `}
        ></div>
        <div className="container-banner-icons">
          <p>
            <span>
              <img src="/static/icons/forward.png" alt="" />
            </span>
            Starting at $299 for 30 days
          </p>
          <p>
            <span>
              <img src="/static/icons/toys.png" alt="" />
            </span>
            Boost with options
          </p>
          <p>
            <span>
              <img src="/static/icons/disturb.png" alt="" />
            </span>
            Cancel anytime
          </p>
        </div>
      </div>
    </StyledBanner>
  );
};

export default Banner;
