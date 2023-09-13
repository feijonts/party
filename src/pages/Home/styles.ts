import styled from "styled-components";
import background from "../../images/background.png";

export const Simple = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${background});

  img {
    width: 220px;
    margin-bottom: -30px;
  }

  p {
    color: white;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const Details = styled.div`
  width: 100%;
  height: max-content;

  padding: 80px 0;

  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const Descriptions = styled.div`
  width: 80%;
  padding: 0 30px;

  div {
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
      color: #525252;
      margin-right: 10px;
    }

    p {
      color: #525252;
    }

    a {
      padding: 0;
      border: none;
      color: #ff7575;
      color: #ff7575;
      cursor: pointer;
      font-weight: bold;
      font-size: 15px;
    }
  }

  p {
    color: #525252;
  }

  h2 {
    margin: 50px 0 15px 0;
  }

  a {
    color: #ff7575;
    font-weight: bold;
    padding: 12px 50px;
    border-radius: 5px;
    border: 2px solid #ff7575;
    font-size: 10px;
  }

  a:hover {
    color: white;
    background-color: #ff7575;
    transition: 0.4s;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Buy = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  margin-right: 60px;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 90px;
  }
`;

export const BuyBox = styled.div`
  width: 90%;
  height: max-content;
  background: rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  flex-direction: column;

  border-radius: 0 0 5px 5px;

  padding: 20px;

  button {
    padding: 20px 10px;
    text-align: center;
    background: #40b12d;
    text-decoration: none;

    color: white;
    font-weight: bold;
    font-size: 12px;

    border: none;
    border-radius: 10px;
  }

  button:hover {
    background: #4fc03c;
    transition: 0.4s;
  }
`;

export const BuyTitle = styled.div`
  display: flex;
  padding: 0 20px;
  background: black;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px 5px 0 0;

  height: 40px;

  p {
    color: white;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const BuyInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;

  p {
    color: black;
    font-weight: bold;
  }

  small {
    color: #525252;
  }
`;

export const InfoText = styled.div``;

export const BuyAmount = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 8px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;


export const Terms = styled.div`

  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 15px;

  p {
    font-size: 12px;
    margin-right: 10px;

    a {
      padding: 0;
      color: #ff7575 !important;
      background: transparent;
      font-weight: bold;
      text-decoration: none;
    }
  }
  
`

export const Menu = styled.div`
  top: 15px;
  right: 25px;
  position: absolute;

  display: flex;
  align-items: center;

  button {
    width: 100px;
    height: 35px;
    margin-left: 15px;
    border-radius: 100px;
    background-color: #d43737;

    color: white;
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    border: 1px solid rgb(255, 255, 255, 0.1);
    text-transform: uppercase;


    &:hover {
      opacity: 0.7;
      transition: 0.4s;
    }
  }
`