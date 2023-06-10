import { useDispatch, useSelector } from "react-redux";
import HistoryItem from "./HistoryItem/HistoryItem";
import HistoryList from "./HistoryList/HistoryList";

import { useEffect } from "react";
import { getOrdersHistory } from "../../redux/auth/operations";
import Box from "../../components/Box/Box";
import { selectedOrdersHistory } from "../../redux/auth/selectors";



const History = () => {

    const dispatch = useDispatch()

const historyOrders = useSelector(selectedOrdersHistory)

useEffect(() => {
    
    dispatch(getOrdersHistory())
    
}, [dispatch])

    return (
        <>
        <Box width={'45%'} ml='auto' mr='auto' pt={96}  style={{borderRadius: '30px', display: 'flex'}}>
            <Box p={16}  style={{outline: '1px solid black', minHeight: '600px', width: '100%', backgroundColor:'rgb(0 0 0 / 80%)', borderRadius: '32px'}}>
            {historyOrders?.length !== 0 ? <HistoryList>
                <HistoryItem />
            </HistoryList> : 
            <p style={{margin: '0 auto', color: 'red', fontWeight: 'bold'}}>У вас ще не було замовлень</p>}
            </Box>
        </Box>
        </>
    )
}

export default History;