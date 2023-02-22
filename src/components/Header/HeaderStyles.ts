import styled from "styled-components";

export const Header = styled.header<{theme: string}>`
  height: 90px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.theme === `light` ? "" : `var(--darkBlue)`};
  color: ${(props) =>
     (props.theme === `light` ? "" : `var(--white)`)};
     transition: all ease 0.2s;

  .header__container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 5rem;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
      padding: 0 1rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;

      h1 {
        font-size: 1rem;
      }
    }

    .button__change-mode {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      p {
        font-weight: 800;
        margin-left: 0.5rem;
      }
    }
  }
`;
