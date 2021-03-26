import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledLatestStory = styled.div`
  width: 100%;
  margin-top: 3rem;

  .container-latest-story {
    display: grid;
    column-gap: 2rem;
    padding: 2rem;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    grid-template-columns: 70% 20%;
    background-color: #fff;

    .text-latest-story {
      a {
        color: #242424;
        font-weight: 500;
        font-size: 1.5rem;

        @media (min-width: 1200px) {
          font-size: 1.2rem;
          transition: all 0.5s;
          --webkit-transition: all 0.5s;

          &:hover {
            transition: all 0.5s;
            --webkit-transition: all 0.5s;
            text-decoration: underline;
          }
        }
      }
    }

    .img-story-latest {
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }

      @media (min-width: 600px) {
        width: 6rem;
        height: 6rem;
      }
    }
  }
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;

const LatestStory = () => {
  return (
    <StyledLatestStory>
      <h2 className="title-component-h">Latest Story</h2>
      <div className="container-latest-story">
        <div className="text-latest-story">
          <Link href="/stories">
            <a>
              Building your feedback loop early: a Maker Grant recipient shares
              his advice.
            </a>
          </Link>
        </div>
        <div className="img-story-latest">
          <img src="/static/img/boy.png" />
        </div>
      </div>
    </StyledLatestStory>
  );
};

export default LatestStory;
