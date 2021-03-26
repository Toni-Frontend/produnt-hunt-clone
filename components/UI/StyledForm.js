import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  padding: 2rem;
  margin-top: 1rem;
  border-radius: 8px;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fff;
`;

export const StyledContainerInput = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const StyledContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  label {
    color: #242424;
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    color: #ff4d4d;
    font-size: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 4rem;
  color: #242424;
  padding: 0 0.3rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  color: #242424;
  padding: 0.5rem 0.3rem;
  margin-top: 1rem;
  font-size: 1.4rem;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  font-family: 'Roboto', sans-serif;
`;

export const StyledSubmit = styled.input`
  border: none;
  cursor: pointer;
  display: block;
  color: #fff;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: #cc4d29;
`;

export const StyledImageDiv = styled.div`
  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 599px) {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  @media (min-width: 600px) {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  @media (min-width: 1200px) {
    width: 80%;
    margin: auto;
  }
`;

export const StyledH5 = styled.h5`
  color: #242424;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const StyledP = styled.p`
  color: #808080;
  font-size: 1.5rem;
  line-height: 1.6;
`;
