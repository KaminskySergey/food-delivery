import styled from "styled-components";

export const Form = styled.form`
border-radius: 5px;
padding: 20px;
width: 500px;
text-align: center;
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.7);
`

export const Title = styled.h3`
color: gold;
display: inline;
margin-bottom: 16px;
`
export const Label = styled.label`
color: white;
&:not(:first-child){
    margin-top: 8px;
}
`
export const Input = styled.input`
width: 300px;
height: 64px;
border: none;
border-radius: 16px;
padding: 16px 4px;
padding-left: 24px;
transition: all 250ms;
background-color: rgba(0, 125, 215, 0.2);
color: gold;
&:hover, &:focus {
    outline: 3px solid gold;
    transform: scale(0.9);
}
`
export const Button = styled.button`
margin: 0 auto;
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
  width: 200px;
  height: 45px;

  &:hover {
    background-color: #E64A19;
  }
`