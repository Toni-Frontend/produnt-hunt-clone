import React from "react";
import styled from "styled-components";
import CommentIcon from "@material-ui/icons/Comment";

const StyledCUI = styled.div`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e1e1e1;

  p {
    color: #242424;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;

const CommentUI = () => {
  return (
    <StyledCUI>
      <CommentIcon style={{ fontSize: 50, color: "#242424" }} />
      <p>Be the first to comment</p>
    </StyledCUI>
  );
};

export default CommentUI;
