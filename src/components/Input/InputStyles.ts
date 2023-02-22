import styled from "styled-components";

export const InputArea = styled.section<{ theme: string }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 3rem 0;
  transition: all ease 0.2s;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding 1.5rem 0;
  }

  input {
    height: 50px;
    width: 350px;
    border-radius: 5px;
    padding: 0 1rem;
    border: none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 0.9rem;
    background-color: ${(props) =>
      props.theme === `light` ? "" : `var(--darkBlue)`};

    color: ${(props) => (props.theme === `light` ? "" : `var(--white)`)};

    &::placeholder {
      color: ${(props) => (props.theme === `light` ? `var(--veryDarkBlue)` : `var(--white)`)};
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 2rem;
    }
  }

  select {
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 0 2rem;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    outline: 0;
    font-size: 0.9rem;
    background-color: ${(props) =>
      props.theme === `light` ? "" : `var(--darkBlue)`};

    color: ${(props) => (props.theme === `light` ? "" : `var(--white)`)};

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
        width: 50%;
        text-align: center;
        padding: 0;
      }
  }
`;
