import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
display: flex;
align-items: center;
`


export const Link = styled(NavLink)`
text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 15px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
  &:hover {
  background-position: right center;
}
&:active {
    background-image: linear-gradient(to right, #000 0%, #656565 51%, #677 100%);
}

`
