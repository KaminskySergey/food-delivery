import styled from 'styled-components';

export const Item = styled.li`
display: flex;
align-items: center;
height: 64px;
border-radius: 16px;
overflow: hidden;
background-color: black;
transition: 250ms all;
transform: scale(1);
&:hover, &:focus{
transform: scale(1.1);
cursor: pointer;
}

`