import { useDispatch, useSelector } from "react-redux";
import { AddToCartButton, ImageContainer, Item, ItemImage, ItemName, ItemPrice, ItemQuantity, RemoveToCartButton } from "./ShopItem.styled";
import { addToCart, deleteProduct } from "../../../../redux/cart/cartSlice";
import { selectIsCart } from "../../../../redux/cart/selectors";


const ShopItem = ({ items }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectIsCart);

  const handleAddItemsToCart = (id) => {
    
    const product = items.find((el) => el._id === id);
    dispatch(addToCart(product));
    
  };

  const handleDeleteFromCart = (id) => {
    
    dispatch(deleteProduct(id));
    
  };

  return (
    <>
      {items?.map((el) => (
        <Item key={el._id}>
          <ImageContainer>
            <ItemImage src={el.avatarURL} alt={el.name} />
          </ImageContainer>
          <ItemName>{el.name}</ItemName>
          <ItemPrice>Цена: ${el.price}</ItemPrice>
          <ItemQuantity>Количество: {el.quantity}</ItemQuantity>
          {cart.find((item) => item._id === el._id) ? (
            <RemoveToCartButton onClick={() => handleDeleteFromCart(el._id)}>
              Remove
            </RemoveToCartButton>
          ) : (
            <AddToCartButton onClick={() => handleAddItemsToCart(el._id)}>
              Add
            </AddToCartButton>
          )}
        </Item>
      ))}
    </>
  );
};

export default ShopItem;