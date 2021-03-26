import styled from "styled-components";

export const StyledJob = styled.div`
  padding: 2rem;
  grid-column: 2;
  margin-top: 2rem;
  cursor: pointer;
  background-color: #fff;
  @media (max-wdith: 599px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .content-text-job {
    display: flex;
    flex-direction: row;
    .img-logo-job {
      width: 6rem;
      height: 6rem;
      margin-right: 1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content-description-job {
      line-height: 1.7;
      h2 {
        font-size: 1.5rem;
        color: #242424;
      }
      .rol-job {
        font-size: 1.3rem;
        font-weight: 500;
        color: #242424;
      }
      .location-job {
        font-size: 1.3rem;
        color: rgb(111, 111, 111);
      }
    }
  }

  .content-links-job {
    p {
      padding-right: 1rem;
    }

    a {
      color: #6f6f6f;
      margin: 1rem;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.8rem 2rem;
      border-radius: 2px;
      transition: all 0.3s;
      border: 1px solid #e5e5e5;
      text-transform: uppercase;

      &:hover {
          transition: all 0.3s;
          background-color: #E9E9E9;
      }
    }

    @media (max-width: 599px) {
      padding: 1rem 0 0 6rem;
      line-height: 1.9;
    }
    @media (min-width: 600px) {
      padding: 0;
      line-height: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    }
  }
`;
