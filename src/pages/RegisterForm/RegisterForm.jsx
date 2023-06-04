import { useState } from "react";
import { useDispatch } from "react-redux";

import { login, register } from "../../redux/auth/operations";
import { Button, Input, Label, Title, Form } from "./RegisterForm.styled";
import Box from "../../components/Box/Box";
import { Link } from "react-router-dom";




const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'email': 
            setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'phone':
                setPhone(value)
                break;
            case 'address':
                setAddress(value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const {error} = await dispatch(register({ name, email, password, phone, address }));

      !error && dispatch(login({email, password}))
        reset()
    }

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
        setPhone('')
        setAddress('')
    }
    return (
        <>
        <Box width={'99%'} ml='auto' mr='auto' pt={128}  style={{borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Form onSubmit={handleSubmit}>
            <Title style={{textAlign: "center", marginBottom: '16px'}}>РЕЄСТРАЦІЯ</Title>
            <Box style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}  mb={16}>
            
                <Label>
                <label htmlFor='1'>
                Name:
                    <Input style={{marginLeft: 41}} placeholder='Name' type="name" value={name} name="name"  onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            
            
                <Label>
                <label htmlFor='2'>
                Email:
                    <Input style={{marginLeft: 44}} placeholder='Email'  type="email" value={email} name="email"  onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            
            
                <Label>
                <label htmlFor='3'>
                Password:
                    <Input style={{marginLeft: 16}} placeholder='Password'  type="password" value={password} name="password" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>

                <Label>
                <label htmlFor='4'>
                Phone:
                    <Input style={{marginLeft: 37}} placeholder='Phone'  type="tel" value={phone} name="phone" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
                

                <Label>
                <label htmlFor='5'>
                Address:
                    <Input style={{marginLeft: 26}} placeholder='Adress'  type="text" value={address} name="address" onChange={(e) => handleChange(e)}/>
                </label>
                </Label>
            </Box>
            
            <Button type="submit">Зареєструватися</Button>
        </Form>
        <div style={{marginTop: '16px'}}>
            <Link to={'/login'} style={{textDecoration: 'underline', color: '#1c197c'}}>Вже зареєстровані?</Link>
        </div>
        </Box>
        </>
    )
}



export default RegisterForm;