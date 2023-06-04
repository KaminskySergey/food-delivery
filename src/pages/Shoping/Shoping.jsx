import { useEffect, useState } from "react";
import ShopingCard from "../../pages/Shoping/ShopingCard/ShopingCard";
import ShopingCardForm from  "../../pages/Shoping/ShopingCardForm/ShopingCardForm"
import { useDispatch, useSelector } from "react-redux";
import { selectIsCart } from "../../redux/cart/selectors";
import { selectIsProduct } from "../../redux/product/selectors";
import { submitOrder } from "../../redux/cart/operations";
import { productsAll } from "../../redux/product/operations";
import { clearOrder } from "../../redux/cart/cartSlice";
import Box from "../../components/Box/Box";
import { ButtonClear, ButtonSubmit } from "./Shoping.styled";

const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    for (const item of cart) {
      const price = parseFloat(item.price);
      const quantity = item.quantity;
  
      if (!isNaN(price) && Number.isInteger(quantity)) {
        totalCost += price * quantity;
      }
    }
  
    return Number(totalCost.toFixed(2));
  };
/////////////////////////////////////////

  ////////////////////////////////////
const Shoping = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    
    

    
    
    
    const productAll = useSelector(selectIsProduct)
    
    const dispatch = useDispatch()
    
    const order = useSelector(selectIsCart)
  
    const cart = order.map(item => {
        const { _id, description, __v, ...rest } = item;
        return { productId: _id, ...rest };
    });
    
    useEffect(() => {
        dispatch(productsAll())
    }, [dispatch])

    const filterQuantity = cart.map((cartProduct) => {

        const baseProduct = productAll.find((item) => item._id === cartProduct.productId);

        if (baseProduct && cartProduct.quantity > baseProduct.quantity) {
            return true
        } else {
            return false
        }
      });

        const isQuantity = filterQuantity.includes(true)


const handleInfo = () => {
    const totalPrice = calculateTotalCost(cart)
    
    const user = {
        name,
        phone,
        email,
        address,
    }
    if(isQuantity){
        console.log('нельзя')
        return 
    }
    
    dispatch(submitOrder({user, cart, totalPrice}))
    // .then(response => {
    //     if(response.meta.requestStatus === 'fulfilled'){
    //         dispatch(clearOrder(cart))
    //         console.log('очищено кошик')
    //     } else {
    //         console.log('Ваше замовлення не було створене!')
    //     }
    // }
    // )

    reset()

}
const reset = () => {
    setName('')
    setPhone('')
    setEmail('')
    setAddress('')
}

const handleClearCart = () => {
    // видалити весь кошик
    dispatch(clearOrder())
}
    const handleChange = (e) => {

        const {name, value} = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setPhone(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'adresse':
                setAddress(value)
                break;
            default:
                return;
    }
    }

    
    const isFormValid = name !== '' && email !== '' && phone !== '' && address !== '';

    return (
    <>
    <Box width={'99%'} ml='auto' mr='auto' pt={96}  style={{borderRadius: '30px', display: 'flex'}}>
                <Box display='flex' p={16}  style={{outline: '1px solid black', minHeight: '600px', width: '100%', backgroundColor:'rgb(0 0 0 / 80%)', borderRadius: '32px'}}>
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
    <div style={{display: 'flex', width: '100%', height: '90%'}}>
    <ShopingCardForm isFormValid={isFormValid} handleChange={handleChange} name={name} email={email} phone={phone} address={address}/>
    <ShopingCard  isQuantity={isQuantity} handleInfo={handleInfo}/>
    </div>
    
        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: '32px'}}>
            {cart.length === 0 ? '' : <ButtonClear onClick={handleClearCart} style={{marginRight: 'auto'}} type="button">Очистити весь кошик</ButtonClear>}


            {isQuantity && <p style={{color: 'red', padding: '8px' }}>Сыграем в игру!!! Какого-то товара слишком много</p>}
            {cart.length === 0 ? '' : 
            (<>
                <p style={{margin: '0 32px', color: 'white', backgroundColor: '#180080', padding: '8px', borderRadius: '4px'}}>total: {calculateTotalCost(cart)}</p>
                <ButtonSubmit  onClick={handleInfo} disabled={!isFormValid} type="button">Замовити</ButtonSubmit>
            </>)}
            
        </div>
    
    </div>
    </Box>
    </Box>
    </>
    )
}

export default Shoping;