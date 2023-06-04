
import Box from "../../../components/Box/Box";

import ShopMarketList from './ShopMarketList'
import { useDispatch, useSelector } from "react-redux";
import { selectIsShop } from "../../../redux/shop/selectors";
import { shopAll } from "../../../redux/shop/operations";
import { useEffect } from "react";

const ShopMarket = ({children}) => {
    const dispatch = useDispatch()
    const shops = useSelector(selectIsShop)
    useEffect(() => {
        dispatch(shopAll())
    }, [dispatch])
    return (
        <>
        
        <Box style={{ marginRight: '32px', borderRadius: '32px'}} height='100%' width='20%'>
        <ShopMarketList  shops={shops}>
            {children}
        </ShopMarketList>
        </Box>
        </>
    );
  };

export default ShopMarket;

