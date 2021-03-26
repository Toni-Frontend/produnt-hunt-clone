import styled from "styled-components";

export const StyledHiring = styled.div`
  width: 100%;
  margin-top: 3rem;

  .container-hiringnow {
    padding-bottom: 3rem;
    background-color: #fff;
    .row-hiring {
      display: grid;
      padding: 2rem;
      cursor: pointer;
      background-color: #fff;
      grid-template-columns: 70% 30%;

      .hiring-text {
        line-height: 1.4;
        h2 {
          color: #242424;
          font-size: 1.6rem;
        }
        h3,
        p {
          color: #808080;
          font-weight: 400;
          font-size: 1.3rem;
        }
      }
      .hiring-logo {
        width: 5rem;
        height: 5rem;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .post-a-job {
        width: 90%;
        margin: auto;
        display: flex;
        margin-top: 2rem;
        font-size: 1.4rem;

        p {
            margin-right: 1rem;
        }

        a {
            cursor: pointer;
        }
    }
  }
`;

export const StyledButtonAll = styled.a`
  width: 90%;
  margin: auto;
  color: #da552f;
  cursor: pointer;
  display: flex;
  font-size: 1.3rem;
  padding: 1rem 0;
  text-transform: uppercase;
  justify-content: center;
  border: 1px solid #e1e1e1;
  transition: all 0.3s ease;

  @media (min-width: 1200px) {
    &:hover {
      transition: all 0.3s ease;
      border: 1px solid #da552f;
    }
  }
`;
