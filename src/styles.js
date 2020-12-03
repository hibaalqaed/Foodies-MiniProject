import styled, { createGlobalStyle } from "styled-components";

//Global style for the page
export const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.mainColor};
    background: ${(props) => props.theme.backgroundColor};
    p{
      text-align: center;
    }
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const ItemWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  img {
    border-bottom-style: solid;
    border-width: 2px;
    border-color: ${(props) => props.theme.itemBorder};
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
  h3 {
    text-align: center;
    color: ${(props) => props.theme.blue};
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;
export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
