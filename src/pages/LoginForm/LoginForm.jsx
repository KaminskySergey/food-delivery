import Box from "../../components/Box/Box";
import { Button, Input, Label, Title, Form } from "./LoginForm.styled";
// import { login } from "redux/auth/operations";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    email: '',
    password: '',
  };

  const LoginForm = () => {
    const [value, setValue] = useState(initialState)

    const dispatch = useDispatch()
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValue(pS => ({...pS, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login(value))
    }
    return (
        <>
        <Box width={'99%'} ml='auto' mr='auto' pt={128}  style={{borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Form onSubmit={handleSubmit}>
            <Title>УВІЙТИ</Title>
            <Box style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}} mb={16}>
            <Label>
                <label>
                Email:
                    <Input style={{marginLeft: 44}} placeholder='Email'  type="email" value={value.email} name="email" onChange={(e) => handleChange(e)}/>
                </label>
            </Label>
            <Label>
                <label>
                Password:
                    <Input style={{marginLeft: 16}} placeholder='Password'  type="password" value={value.password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
            </Label>
            </Box>
            <Button type="submit">OK</Button>
        </Form>
        <div style={{marginTop: '16px'}}>
            <Link to={'/register'} style={{textDecoration: 'underline', color: '#1c197c'}}>Не має аккаунта?</Link>
        </div>
        </Box>
        </>
    )
  }

  export default LoginForm;