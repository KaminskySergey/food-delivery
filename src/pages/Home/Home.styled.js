import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Link = styled(NavLink)`
  background-color: #FF5722;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E64A19;
  }
`

export const ContImg = styled.div`
    width: 600px;
    border-radius: 50%;
    
    
`