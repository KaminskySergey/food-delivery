import { useDispatch } from "react-redux"
import ShopItem from "../ShopItem/ShopItem"
import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import { productsByShop } from "../../../../redux/product/operations"

const ShopCardList = ({items}) => {
   const dispatch = useDispatch()
   const shopId = useParams()
   const location = useLocation()
   useEffect(() => {
      if (shopId !== "undefined") {
         dispatch(productsByShop(shopId));
       }
   }, [dispatch, shopId])
 return (
    <>
    {location.pathname === '/shop' ? <p style={{textAlign: 'center', color: 'red'}}>Вам нужно выбрать магазин</p> : 
    <ul style={{display: 'flex', flexWrap: 'wrap', margin: '-15px'}}>
    <ShopItem items={items}/>
    </ul>
    }
    
    </>
 )
}

export default ShopCardList