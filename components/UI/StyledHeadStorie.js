import styled from "styled-components";

export const StyledHeadStorie = styled.div`
  width: 100%;
  background-color: #fff;

  @media (max-width: 599px) {
    display: grid;
    height: 100vh;
    grid-template-columns: 100%;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 100%;
  }

  @media (min-width: 900px) {
    display: grid;
    height: 40vh;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100% 100%;
  }

  @media (min-width: 1200px) {
    height: 60vh;
  }

  @media (min-width: 1400px) {
    height: 60vh;
  }

  @media (min-width: 1800px) {
    height: 65vh;
  }

  .img-head-storie {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content-head-storie {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 599px) {
      margin-top: 2.2rem;
      padding-bottom: 5rem;
    }

    h2 {
      color: #242424;
      font-weight: 500;
      font-size: 2.8rem;

      @media (min-width: 900px) {
        font-size: 4.8rem;
      }
      @media (min-width: 1800px) {
        font-size: 4.5rem;
      }
    }

    .subtitle-blog {
      margin-top: 2rem;
      line-height: 1.6;
      font-weight: 400;
      font-size: 1.7rem;
      color: #808080;
    }

    .user-and-date {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      .img-user {
        width: 3rem;
        height: 3rem;
        border-radius: 32px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      .by-user {
        color: #242424;
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 1rem;
      }

      .date-blog {
        color: #242424;
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 2rem;
      }
    }
  }
`;