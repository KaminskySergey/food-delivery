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
  &:hover, &:focus {
  background-position: right center;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, red 100%);
}
&:active,
  &.active { /* Добавлено .active для активной ссылки */
    background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, red 100%) !important;
    transform: scale(1.2);
  }

`

export const LinkAuth = styled(NavLink)`
text-decoration: none;
  display: inline-block;
  color: white;
  padding: 10px 15px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, rgb(66 255 3) 0%, rgb(213 255 0) 51%, #020bf9 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
  &:hover, &:focus {
  background-position: right center;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, red 100%);
}
&:active,
  &.active { /* Добавлено .active для активной ссылки */
    background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, red 100%) !important;
    transform: scale(1.2);
  }

`

export const DivLogout = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin-right: 16px;
  font-weight: bold;
  color: white;
`;

export const ButtonLogout = styled.button`
  padding: 8px 16px;
  background: red;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;