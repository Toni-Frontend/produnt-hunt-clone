import styled from "styled-components";

export const StyledButton = styled.a`
  font-weight: 700;
  font-size: 1rem;
  display: block;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 1rem;
  margin: 0.5rem;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  color: ${(props) => (props.bgColor ? "white" : "#828282")};
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-out;
    background-color: ${(props) => (props.bgColor ? "#F04F20" : "#E0E0E0")};
  }

  &::last-of-type {
    margin-right: 0;
  }
`;

export const StyledContainerVote = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
`;

export const StyledButtonVote = styled.button`
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 1.5rem 1rem;
  margin: 0 0.5rem;
  text-align: center;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease-out;
  color: ${(props) => (props.bgColor ? "white" : "#828282")};
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-out;
    background-color: ${(props) => (props.bgColor ? "#F04F20" : "#E0E0E0")};
  }

  &::last-of-type {
    margin-right: 0;
  }
`;
