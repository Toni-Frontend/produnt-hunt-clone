import styled from "styled-components";

export const StyledStorielist = styled.div`
  margin-top: 3rem;
  display: grid;
  column-gap: 1rem;
  padding: 2rem;
  grid-template-columns: 65% 30%;

  @media(max-width: 599px) {
    grid-template-columns: 70% 30%;
  }
  @media(min-width: 600px) {
    grid-template-columns: 70% 30%;
  }
  @media(min-width: 1800px) {
    grid-template-columns: 70% 30%;
  }

  .container-storie {
    h3 {
      color: #242424;
      font-size: 2.5rem;
      margin-bottom: 2rem;

      @media (max-width: 599px) {
        font-size: 1.7rem;
      }
    }

    .container-user {
      display: flex;
      flex-direction: row;
      align-items: center;
      .container-img {
        width: 3rem;
        height: 3rem;
        border-radius: 32px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
      }

      p {
        font-size: 1.5rem;
        font-weight: 500;
        margin-left: 2rem;

        @media (max-width: 599px) {
          font-size: 1.1rem;
          margin-left: 1.5rem;
        }
      }
    }

    .subtitle {
      color: #808080;
      font-size: 1.6rem;
      margin-top: 1.6rem;

      @media (max-width: 599px) {
        font-size: 1.1rem;
      }
      @media (min-width: 1800px) {
        font-size: 1.5rem;
        line-height: 1.7;
        font-weight: 300;
      }
    }
  }

  .preview-img-storie {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;

      @media (max-width: 599px) {
        width: 100%;
        height: 60%;
        margin: 0 auto;
      }
      @media (min-width: 600px) {
        width: 100%;
        height: 60%;
        margin: 0 auto;
      }
      @media (min-width: 768px) {
        width: 100%;
        height: 80%;
        margin: 0 auto;
      }
    }
  }
`;
