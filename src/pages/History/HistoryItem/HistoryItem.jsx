import { useSelector } from "react-redux"
import { selectedOrdersHistory,  } from "../../../redux/auth/selectors";

import { selectIsShop } from "../../../redux/shop/selectors";
import { Item, OrderInfo, OrderTitle } from "./HistoryItem.styled";

function formatDateTime(inputDateTime) {
    const dateTime = new Date(inputDateTime);
  
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    
  
    const formattedDateTime = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
    return formattedDateTime;
  }





const HistoryItem = () => {
    const historyOrders = useSelector(selectedOrdersHistory)
    
    const shops = useSelector(selectIsShop)

    const renderShopName = (shopId) => {
        const shop = shops.find((shop) => shop._id === shopId);
        if (shop) {
          return (
            <>
            <p>{shop.name}</p>
            </>
            
          );
        }
        return null;
      };
      const renderShopAvatar = (shopId) => {
        const shop = shops.find((shop) => shop._id === shopId);
        if (shop) {
          return (
            <>
            <img style={{height: '100%'}} src={shop.avatar} alt={shop.name} />
              
            </>
            
          );
        }
        return null;
      };
    return (
        <>
        {historyOrders.map((order) => (
          <Item key={order._id}>
            <div style={{width: '50px', display: 'flex', alignItems: 'center', marginRight: '8px'}}>
                {renderShopAvatar(order.shop)}
            </div>
            <div >
            <OrderTitle>{renderShopName(order.shop)}</OrderTitle>
            <OrderInfo>Дата заказа: {formatDateTime(order.createdAt)}</OrderInfo>
            <OrderInfo>Сумма заказа: <span style={{color: 'green'}}>{order.totalPrice}</span></OrderInfo>
            </div>
            
            
          </Item>
        ))}
        </>
    )
}

export default HistoryItem