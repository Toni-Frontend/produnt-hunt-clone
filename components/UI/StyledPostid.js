import styled from "styled-components";

export const StyledHeadPostId = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 3rem;

  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
    margin-top: 3rem;
  }
  @media (min-width: 1800px) {
    width: 55%;
    margin: auto;
    margin-top: 3rem;
  }

  .links-post {
    display: flex;
    align-items: center;
    a {
      color: #242424;
      font-size: 1.1rem;
      text-transform: uppercase;
    }
  }

  .head-title-id {
    display: flex;
    flex-direction: row;
    align-items: center;
    .img-post-id {
      width: 10rem;
      height: 10rem;
      img {
        width: 100%;
        height: 100%;
      }

      @media (min-width: 900px) {
        margin-right: 2rem;
      }
    }

    .title-id-post {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      line-height: 1.7;

      h2 {
        color: #242424;
        font-weight: 500;

        @media (max-width: 599px) {
          margin-top: 2rem;
          font-size: 3rem;
        }
        @media (min-width: 600px) {
          margin-top: 1rem;
          font-size: 3.2rem;
        }
        @media (min-width: 900px) {
          margin-top: 0;
        }
        @media (min-width: 1200px) {
          font-size: 2.1rem;
        }
        @media (min-width: 1800px) {
          font-size: 2.2rem;
        }
      }

      .tagline {
        color: #808080;
        font-weight: 300;
        font-size: 1.4rem;
      }

      .topics {
        color: #808080;
        font-size: 1.1rem;
        padding: 1rem;
        margin-top: 1rem;
        border: 1px solid #e5e5e5;
        text-transform: uppercase;
        background-color: #f8f8f8;

        @media (min-width: 1200px) {
          font-size: 1rem;
          padding: 0.5rem;
          margin-top: 0.5rem;
        }
      }

      @media (min-width: 900px) {
        line-height: 1.5;
        align-items: flex-start;
        justify-content: center;
      }
    }

    @media (max-width: 599px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
    @media (min-width: 600px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
    @media (min-width: 900px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-top: 3rem;
    }
  }
`;

export const StyledPostId = styled.div`
  display: flex;
  flex-direction: column;

  .container-description-post {
    padding: 3rem 1rem;
    background-color: #fff;
    @media (min-width: 1900px) {
      padding: 3rem 3rem;
      }
    .container-img-post {
      width: 100%;
      height: 40rem;
      img {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 599px) {
        height: 30rem;
      }
      @media (min-width: 768px) {
        height: 50rem;
      }
      @media (min-width: 900px) {
        height: 40rem;
      }
    }

    .description-text-post {
      margin: 2rem 0;
      border-top: 2px solid #e5e5e5;
      p {
        width: 100%;
        color: #242424;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.6;
        margin-top: 2rem;
        text-align: justify;
        white-space: pre-wrap;
      }
    }

    .social-and-date {
      display: flex;

      @media (max-width: 599px) {
        flex-direction: column;
      }
      @media (min-width: 600px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
      }

      .red-social-buttons {
        display: flex;
        flex-direction: row;

        .twitter {
          color: #47acdf;
          border: 1px solid #47acdf;

          .fa-twitter {
            color: #47acdf;
          }

          @media (min-width: 1200px) {
            transition: all 0.3s ease;
            background-color: #fff;

            &:hover {
              color: #fff;
              transition: all 0.3s ease;
              background-color: #47acdf;

              .fa-twitter {
                color: #fff;
                transition: all 0.3s ease;
              }
            }
          }
        }

        .facebook {
          color: #3b5998;
          border: 1px solid #3b5998;

          .fa-facebook-f {
            color: #3b5998;
          }

          @media (min-width: 1200px) {
            transition: all 0.3s ease;
            background-color: #fff;

            &:hover {
              color: #fff;
              transition: all 0.3s ease;
              background-color: #3b5998;

              .fa-facebook-f {
                color: #fff;
                transition: all 0.3s ease;
              }
            }
          }
        }
        button {
          cursor: pointer;
          width: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 4px;
          margin-right: 1.3rem;
          padding: 0.8rem 1.5rem;
          background-color: #fff;

          @media (min-width: 600px) {
            width: 5rem;
            padding: 0.8rem 2rem;
          }

          @media (min-width: 1800px) {
            font-size: 1.2rem;
          }

          .fab {
            font-size: 1.7rem;

            @media (min-width: 1800px) {
              font-size: 1.2rem;
            }
          }
        }

        span {
          font-weight: 600;
          margin-left: 0.5rem;
          @media (max-width: 599px) {
            display: none;
          }
        }
      }
    }

    .date-post {
      color: #595961;
      font-size: 1.3rem;
      font-weight: 400;
      text-transform: uppercase;

      @media (max-width: 599px) {
        margin-top: 2rem;
        font-size: 1rem;
      }
    }
  }
`;

export const StyledContainerDiscussion = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;

  .title-discussion {
    color: #595961;
    margin: 2rem 0rem;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .container-discussion {
    padding: 3rem 1rem;
    background-color: #fff;

    h4 {
      color: #242424;
      padding: 1rem;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1.4rem;
    }

    .content-comment {
      display: grid;
      align-items: center;
      grid-template-columns: 20% 80%;

      @media (min-width: 600px) {
        grid-template-columns: 15% 85%;
      }

      .img-user {
        width: 3rem;
        height: 3rem;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 32px;
        }
      }

      .container-input-comment {
        display: grid;
        column-gap: 0.5rem;
        align-items: flex-start;
        grid-template-columns: 70% 30%;

        @media (min-width: 600px) {
          grid-template-columns: 80% 20%;
        }
        textarea {
          width: 90% !important;
          border: none;
          padding: 1rem;
          color: #242424;
          font-size: 1.5rem;
          border: 1px solid #e5e5e5;
          background-color: transparent;
          font-family: "Roboto", sans-serif;

          &::placeholder {
            font-size: 1.2rem;
          }

          @media (min-width: 768px) {
            width: 95% !important;
          }
        }

        input {
          color: #fff;
          border: none;
          margin: 0 auto;
          padding: 1rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          text-transform: uppercase;
          background-color: #cc4d29;
        }
      }
    }
  }
`;
