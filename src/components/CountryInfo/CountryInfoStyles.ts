import styled from "styled-components";

export const CountryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }

  .country__flag-img {
    width: 45%;

    @media screen and (max-width: 1024px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .country__data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding: 2rem 0 2rem 5%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      padding: 1rem 0 1rem;
    }

    .data__header {
      font-size: 1.5rem;
      margin-bottom: 1rem;

      @media screen and (max-width: 425px) {
        font-size: 1rem;
      }
    }

    .data__main-info {
      display: flex;
      justify-content: space-between;
      line-height: 1.8;
      margin-bottom: 1rem;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }

      .main-info__left,
      main-info__right {
        width: 50%;

        @media screen and (max-width: 425px) {
          margin-bottom: 1rem;
          width: 100%;
        }
      }
    }
  }

  .borders-data {
    display: flex;
    flex-direction: column;

    .data__borders {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;

      .data__borders--country-container {
        text-decoration: none;
        margin: 5px 7px;
        width: 100px;
        text-align: center;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        background-color: ${(props) =>
          props.theme === `light` ? "" : `var(--darkBlue)`};
        color: ${(props) => (props.theme === `light` ? "var(--veryDarkBlue)" : `var(--white)`)};

        @media screen and (max-width: 375px) {
          width: 80px;
        }
      }

      .data__borders--no-borders {
        margin-left: 10px;
      }
    }
  }

  .info-bold {
    font-weight: 600;
  }
`;
