import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  height: 372px;
  width: 100%;
  background-color: #13273b;
  background: linear-gradient(90deg, #0a1e26, #173946 53.07%, #114d52);
  display: flex;
  justify-content: center;

  .banner-content {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .p-job-hunt {
      width: 165px;
      color: #fff;
      text-align: center;
      font-weight: 700;
      font-size: 1.5rem;
      padding: 5px 10px;
      margin-bottom: 2rem;
      border-radius: 3px;
      background-color: hsla(0, 0%, 97.6%, 0.2);
    }
    h3 {
      color: #fff;
      font-size: 4rem;
      font-weight: 700;

      @media (min-width: 900px) {
        width: 65%;
        font-size: 5.5rem;
      }
      @media (min-width: 1800px) {
        width: 60%;
      }
    }

    .container-banner-icons {
      display: flex;
      margin-top: 2rem;
      line-height: 1.5;
      flex-direction: column;
      p {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #e1e1e1;
        font-size: 1.3rem;
        font-weight: 400;

        span {
          margin-right: 0.5rem;
          img {
            width: 2rem;
            height: 2rem;
          }
        }

        @media (min-width: 600px) {
          margin-right: 2rem;
        }
        @media (min-width: 900px) {
          font-size: 1.6rem;
        }
      }

      @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        margin-top: 2rem;
      }
    }
    @media (min-width: 1200px) {
      width: 80%;
    }
    @media (min-width: 1800px) {
      width: 55%;
    }
  }
`;
