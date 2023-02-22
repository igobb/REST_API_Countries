import styled from 'styled-components';

export const CountriesArea = styled.main`
    min-width: 100vw;
    min-height: calc(100vh - 90px);
    font-size: 14px;
    padding: 0 5rem 1rem;
    background-color: ${(props) =>
        props.theme === `light` ? "" : `var(--veryDarkBlue)`};

    @media screen and (max-width: 600px) {
        padding: 0 1rem;
      }
    
    .container__countries {
        display: flex;
        justify-content: space-between; 
        flex-wrap: wrap;
        gap: 30px;

        @media screen and (max-width: 768px) {
            justify-content: center;
        }
    }
`