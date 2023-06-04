import Box from "../../../components/Box/Box";
import ShopItem from "./ShopItem/ShopItem";

import ShopCardList from "./ShopCardList/ShopCardList"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsProduct, selectIsProductId } from "../../../redux/product/selectors";

import { productsAll } from "../../../redux/product/operations";




const ShopCard = () => {
   
    const dispatch = useDispatch()
    const productAll = useSelector(selectIsProduct)
    const productsId = useSelector(selectIsProductId)

    const filteredObjects = productAll.filter(obj => productsId.includes(obj._id));
    useEffect(() => {
        dispatch(productsAll())
        
    }, [dispatch])
    return (
        <Box style={{borderRadius:'16px', padding: '16px 32px 0 32px', overflowY: 'scroll'}} height='100%' width='80%' >
        
        <ShopCardList items={filteredObjects}>
            <ShopItem />
        </ShopCardList>
        </Box>
    )
}

export default ShopCard;