import styled from "styled-components";

export const StyledBoxHunter = styled.div`
  padding: 2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  h6 {
    margin: 1.5rem 0;
    color: #595961;
    font-weight: 500;
  }

  .users-hunter {
    display: grid;
    row-gap: 1.5rem;
    grid-template-columns: 20% 70%;
    justify-content: flex-start;
    .img-hunter {
      width: 50%;
      margin: auto;
      border-radius: 32px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .user-role {
      h4 {
        color: #1a1a1a;
        font-weight: 600;
        font-size: 1.3rem;
      }

      p {
        color: #595961;
        margin-top: 0.5rem;
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
  }

  .hunter-two {
    height: 10rem;
    overflow-y: scroll;
  }
`;
