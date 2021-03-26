import styled from "styled-components";

export const StyledTodayContainer = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: 80% 20%;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  transition: all 0.3s;

  @media(min-width: 1200px) {
    &:hover {
      cursor: pointer;
      transition: all 0.3s;
      background-color: #F9F9F9;
    }
  }

  .content-list-product {
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: flex-start;

    @media(min-width: 600px) {
      grid-template-columns: 20% 80%;
    }

    .img-logo-product {
      width: 7rem;
      height: 7rem;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text-product-list {
      margin-left: 1rem;
      h2 {
        color: #242424;
        font-size: 1.6rem;
        font-weight: 600;
      }
      h3 {
        color: #808080;
        margin-top: 0.9rem;
        font-size: 1.3rem;
        font-weight: 400;
      }

      div {
        margin-top: 1rem;
        display: flex;
        flex-direction: row;

        align-items: center;
        .comments-link {
          padding: 0.5rem 1.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 4px;
          transition: all 0.3s;
          border: 1px solid #c7c7c7;

          &:hover {
            transition: all 0.3s;
            background-color: #E8E8E8;
          }

          img {
            width: 1.2rem;
            height: 1.2rem;
          }

          p {
            color: #808080;
            font-weight: 600;
            font-size: 1rem;
            margin-left: 0.5rem;
          }
        }

        .category-product-link {
          color: #808080;
          font-weight: 500;
          font-size: 1.1rem;
          margin-left: 1rem;
        }
      }
    }
  }

  .box-votes {
    margin: 0 auto;

    button {
      cursor: pointer;
      border: none;
      font-family: 'Roboto', sans-serif;
      padding: 1rem 1.5rem;
      border-radius: 4px;
      border: 1px solid #c7c7c7;
      background-color: transparent;
      transition: all 0.3s ease;

      @media(min-width: 1200px) {
      &:hover {
        transition: all 0.3s ease;
        background-color: #E8E8E8;
      }
    }

      img {
        width: 3rem;
        height: 3rem;
      }

      p {
        color: #242424;
        font-weight: 600;
      }
    }
  }
`;
