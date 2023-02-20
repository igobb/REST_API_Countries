import styled from "styled-components";

export const CountryInfo = styled.div`
    display: flex;
    justify-content: space-between;;
    width: 100%;
    height: 400px;
    margin-top: 4rem;

    .country__flag-img {
        width: 45%;

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
        padding: 2rem 0 2rem 10%;

        .data__header {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .data__main-info {
            display: flex;
            justify-content: space-between;
            line-height: 1.8;
            margin-bottom: 1rem;

            .main-info__left, main-info__right {
                width: 50%;
            }
        }

    }

    .data__borders {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .data__borders--country-container {
            text-decoration: none;
            color: var(--veryDarkBlue);
            margin: 5px 7px;
            width: 100px;
            text-align: center;
            background-color: var(--veryLightGray);
            box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
            border-radius: 3px;
        }

        .data__borders--no-borders {
            margin-left: 10px;
        }
    }

    .info-bold {
        font-weight: 600;
    }
`