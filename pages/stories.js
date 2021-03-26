import React from "react";
import styled, { css } from "styled-components";
import HiringNow from "../components/Jobs/HiringNow";
import Layout from "../components/layout/Layout";
import StoriesList from "../components/Stories/StoriesList.js";
import HeadStorie from "../components/Stories/HeadStorie";
import useStories from "../hooks/useStories";

const Styledtitle = styled.h2`
  color: #242424;
  margin-top: 1.5rem;
  font-size: 1.8rem;
`;

const Stories = () => {

  const { stories } = useStories('create');

  return (
    <Layout>
      <HeadStorie />
      <div className="container">
        <div>
          <Styledtitle>New Stories</Styledtitle>
          <div>
            {stories.map(storie => (
              <StoriesList key={storie.id} storie={storie}/>
            ))}
          </div>
        </div>
        <aside
          css={css`
            @media (max-width: 899px) {
              display: none;
            }
            @media (min-width: 900px) {
              display: block;
            }
          `}
        >
          <HiringNow />
        </aside>
      </div>
    </Layout>
  );
};

export default Stories;
