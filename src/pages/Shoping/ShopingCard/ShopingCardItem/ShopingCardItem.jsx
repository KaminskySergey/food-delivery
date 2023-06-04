import { useDispatch, useSelector } from "react-redux"
import { updateQuantity, deleteProduct } from "../../../../redux/cart/cartSlice"

import { selectIsCart } from "../../../../redux/cart/selectors"

import { Item, Content, DeleteButton, Image, ImageContainer, QuantityInput, Title, Price } from "./ShopingCartItem.styled"


const ShopingCardItem = () => {
    
    
    const card = useSelector(selectIsCart)
    const dispatch = useDispatch()
    const handleUpdateQuantity = (id, value) => {
        dispatch(updateQuantity({id, value}))
    }
    
    const handleClickDelete = (id) => {
        dispatch(deleteProduct(id))
    }
    return (
        <>
        {card.map((el) => (
            <Item key={el._id}>
            <ImageContainer>
              <Image src={el.avatarURL} alt={el.name} />
            </ImageContainer>
            <Content>
              <Title>Название: {el.name}</Title>
              <Price>Цена: ${el.price}</Price>
              <QuantityInput
                type="number"
                value={el.quantity}
                onChange={(e) => handleUpdateQuantity(el._id, parseInt(e.target.value))}
              />
              <DeleteButton type="button" onClick={() => handleClickDelete(el._id)}>
                Видалити
              </DeleteButton>
            </Content>
          </Item>
        ))}
        </>
    )
}

export default ShopingCardItem