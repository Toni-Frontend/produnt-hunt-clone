import styled from "styled-components";

export const StyledDogBox = styled.div`
  display: flex;
  padding: 2rem;
  margin-top: 2rem;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 4px;
  background-color: #f15713;

  @media(max-width: 599px) {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  @media(min-width: 600px) {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .logo-dog {
    width: 6rem;
    height: 6rem;
    margin-right: 2rem;

    img {
      width: 100%;
      height: 100%;
      border: 3px solid #fff;
      border-radius: 62px;
    }
  }
  .content-text-dog-box {
    line-height: 1.7;
    h4 {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
    }
    p {
      color: #fff;
      font-weight: 300;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    a {
      color: #f15713;
      margin-top: 3rem;
      padding: 1rem 2rem;
      font-size: 1.3rem;
      border-radius: 4px;
      text-transform: uppercase;
      background-color: #fff;
    }
  }
`;
