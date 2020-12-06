import styled, { createGlobalStyle } from "styled-components";
import imageSrc from "./food.jpg";

//Global style for the page
export const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.dark};
    background: ${(props) => props.theme.backgroundColor};
    font-family: Fantasy;
    h1{
     
      text-align: center;
    }

    .displayflex{
      display: flex;
      
      align-items: center;
      justify-content: center;
    }
  
}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  text-shadow: 4px 2px black;
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-shadow: 4px 2px black;
`;

export const HomePage = styled.div`
  margin-bottom: 200px;
  align-content: center;
  background-image: url(${imageSrc});
  background-color: #cccccc;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const ItemWrapper = styled.div`
  margin: 20px;
  color: ${(props) => props.theme.dark};
  transition: transform 0.2s;
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    raduis: 50px;
    margin-bottom: 10px;
  }
  :hover {
    transform: scale(1.1);
  }
  h3 {
    text-align: center;
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.button};
  font-size: 20px;
  text-shadow: 1px 1px black;
  border-radius: 4px;
  &:hover {
    text-shadow: 1px 1px white;
    color: ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

export const ButtonStyled = styled.button`
  display: block;
  width: 150px;
  hight: 100px;
  text-shadow: 2px 1px black;
  border-radius: 4px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 190px;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.button};
  &:hover {
    text-shadow: 1px 1px white;
    color: ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

export const ThemeButton = styled.button`
  text-shadow: 1px 1px black;
  border-radius: 4px;
  font-size: 20px;

  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.button};
  &:hover {
    text-shadow: 1px 1px white;
    color: ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.buttonHover};
  }
`;

export const ButtonStyledFlex = styled.button`
  justify-content: center;
  display: flex;
  width: 180px;
  hight: 140px;
  text-shadow: 2px 1px black;
  border-radius: 4px;
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 200px;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.button};
  &:hover {
    text-shadow: 1px 1px white;
    color: ${(props) => props.theme.dark};
    background-color: ${(props) => props.theme.buttonHover};
  }
`;
