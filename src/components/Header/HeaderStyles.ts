import styled from 'styled-components'

export const Header = styled.header`
    height: 90px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.2);

    .header__container {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0 5rem;
        justify-content: space-between;
        align-items: center;

        .button__change-mode {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                cursor: pointer;
                font-weight: 800;
                margin-left: .5rem
            }
        }
        
    }
`