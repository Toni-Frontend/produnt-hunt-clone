import styled from "styled-components";

export const StyledComentary = styled.div`
  margin-top: 2rem;

  .unique-comment {
    display: grid;
    margin-top: 3rem;
    grid-template-columns: 20% 80%;

    @media(min-width: 600px) {
        grid-template-columns: 15% 80%;
    }

    .img-comment-user {
      width: 3rem;
      height: 3rem;
      margin: 0 auto;
      border-radius: 62px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .description-comment {
      .text-comentary-section {
        .creator-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          h2 {
            color: #242424;
            font-size: 1.4rem;
          }

          p {
            margin-left: 0.5rem;
            font-weight: 500;
            font-size: 1.2rem;
            padding: 0.5rem 1.2rem;
            border-radius: 32px;
          }

          .maker {
            color: #10ac84;
            background-color: #0be88140;
          }

          .hunter {
            color: #242424;
            background-color: #e1e1e1;
          }
        }
      }

      .role {
        color: #808080;
        font-size: 1.3rem;
        font-weight: 400;
        margin-top: 0.5rem;
      }

      .box-comentary {
        margin-top: 1.1rem;
        p {
          color: #242424;
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.6;
          white-space: pre-wrap;
          text-align: justify;
        }
      }
    }
  }
`;
