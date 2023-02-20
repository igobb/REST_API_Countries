import styled from 'styled-components'

export const OneCountryPage = styled.main`
    height: calc(100vh - 90px);
    padding-top: 4rem;
    font-size: 16px;

    .one-country__container {
        width: 100%;
        padding: 2rem 0;
    }

    .country-page__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 40px;
        text-decoration: none;
        background-color: var(--veryLightGray);
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
        border-radius: 5px;
        font-weight: 600;

        .country-page__link-arrow
        {
            margin-right: 5px;
        }
    }


`