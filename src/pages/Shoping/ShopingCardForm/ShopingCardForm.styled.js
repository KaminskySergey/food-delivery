import styled from 'styled-components'

export const Form = styled.form`
border-radius: 5px;
padding: 20px;
width: 400px;
text-align: center;
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.7);
`

export const Title = styled.h3`
color: gold;
display: inline;
`
export const Label = styled.label`
color: white;
display: flex;
justify-content: space-between;
align-items: center;
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
&:not(:first-child){
    margin-top: 8px;
}
`
export const FormButton = styled.button`
    width: ${p => p.theme.space[6]}px;
    height: ${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;
    border-radius: ${p => p.theme.space[2]}px;
    cursor: pointer;
    transition: all 250ms;
    &:hover, &:focus {
        color: ${p => p.theme.colors.yellow};
        background-color: ${p => p.theme.colors.primary};
    }
`