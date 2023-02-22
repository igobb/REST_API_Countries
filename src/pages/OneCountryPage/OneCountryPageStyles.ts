import styled from "styled-components";

export const OneCountryPage = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 90px);
  height: 100%;
  padding: 4rem 5rem 0;
  font-size: 16px;
  background-color: ${(props) =>
    props.theme === `light` ? "" : `var(--veryDarkBlue)`};

  color: ${(props) => (props.theme === `light` ? "" : `var(--white)`)};

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem 0;
  }

  .one-country__container {
    width: 100%;
    max-width: 1440px;
    height: 100%;

    .country-page__link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 130px;
      height: 40px;
      text-decoration: none;
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      font-weight: 600;
      background-color: ${(props) =>
        props.theme === `light` ? "" : `var(--darkBlue)`};
      color: ${(props) => (props.theme === `light` ? "var(--veryDarkBlue)" : `var(--white)`)};

      .country-page__link-arrow {
        margin-right: 5px;
      }
    }
  }
`;
