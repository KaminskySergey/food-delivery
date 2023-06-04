import Box from "../../../components/Box/Box"
import { nanoid } from "nanoid";

import { Form, Input, Label } from "./ShopingCardForm.styled";



const nameId = nanoid();
const emailId = nanoid()
const telId = nanoid()
const adressId = nanoid()

const ShopingCardForm = ({handleChange, name, email, phone, address, isFormValid}) => {

    
    
    return (
        <>
        <Box style={{outline: '1px solid blue', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}  height='100%' width='50%' padding='8px 8px 0' >
        
           <Form style={{display: 'flex', flexDirection: 'column'}}>
           <Label htmlFor={nameId}>
                    Name:
                <Input
                type="name"
                name="name"
                required
                placeholder="Name:"
                onChange={handleChange}
                value={name}
                
                />
                </Label>
                <Label htmlFor={emailId}>
                    Email:
                <Input
                type="email"
                name="email"
                required
                placeholder="Email:"
                onChange={handleChange}
                value={email}
                
                />
                </Label>
                <Label htmlFor={telId}>
                    Phone:
                <Input
                type="tel"
                name="number"
                required
                placeholder="Phone:"
                onChange={handleChange}
                value={phone}
                
                />
                </Label>
                <Label htmlFor={adressId}>
                    Adresse:
                <Input
                type="text"
                name="adresse"
                required
                placeholder="Adresse:"
                onChange={handleChange}
                value={address}
                
                />
                </Label>
           </Form>
            {!isFormValid && <div style={{color: 'red', marginTop: '16px'}}>
                <p>Всі поля форми є обов'язковими!!!</p>
            </div>}
            
        </Box>
        </>
    )
}

export default ShopingCardForm