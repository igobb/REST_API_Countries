import styled from "styled-components";

export const CountryCard = styled.div`
  width: 300px;
  height: 380px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0,0,0,0.2);

  a {
    text-decoration: none;
    color: #000
  }

  .country__img {
    width: 100%;
    height: 50%;
    object-fit: contain;
    
    

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0 0;
    }
  }

  .country__data {
    height: 50%;
    padding: 2rem 1rem 0;
    box-sizing: border-box;

    h1 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    p {
        font-weight: 300;
        line-height: 1.6;

        span {
            font-weight: 800;
        }
    }
    
  }
`