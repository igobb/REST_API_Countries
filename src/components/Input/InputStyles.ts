import styled from 'styled-components'

export const InputArea = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 2rem 0;

    input {
        height: 50px;
        width: 350px;
        border-radius: 5px;
        padding: 0 1rem;
        border: none;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
        outline: 0;
        font-size: .9rem
    }

    select {
        background: #fff;
        border: none;
        border-radius: 5px;
        padding: 0 2rem;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
        outline: 0;
        font-size: .9rem
    }
`