import Box from "../../../components/Box/Box";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsCart } from "../../../redux/cart/selectors";
import { Item } from "./ShopMarketItem.styled";



const ShopMarketItem = ({items}) => {
    const cart = useSelector(selectIsCart)

    
    return (
        <>
        {items?.map(el => (
            <Item className={cart.length > 0 && cart[0].owner !== el._id ? 'disabled' : ''} key={el._id} style={{width: '100%', outline: '1px solid yellow', marginBottom: 16, color: 'white'}}>
                <Link style={{display: 'flex', alignItems: 'center', width: '100%', height: '100%'}} to={`/shop/${el._id}`}>
                <div style={{width: '100px', height: '100%', borderRadius: '50%', marginRight: '16px'}}>
                    <img style={{height: '100%', width: '100%'}} src={el.avatar} alt={el.name} />
                </div>
                <div>
                <Box >
                <p>{el.name}</p>
                </Box>
                </div>
                </Link>
            </Item>
        ))}
        </>
    )
}

export default ShopMarketItem;

