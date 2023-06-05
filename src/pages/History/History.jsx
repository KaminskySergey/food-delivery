import { useDispatch } from "react-redux";
import HistoryItem from "./HistoryItem/HistoryItem";
import HistoryList from "./HistoryList/HistoryList";

import { useEffect } from "react";
import { getOrdersHistory } from "../../redux/auth/operations";
import Box from "../../components/Box/Box";



const History = () => {
const dispatch = useDispatch()



useEffect(() => {
    
    dispatch(getOrdersHistory())
    
}, [dispatch])

    return (
        <>
        <Box width={'45%'} ml='auto' mr='auto' pt={96}  style={{borderRadius: '30px', display: 'flex'}}>
            <Box display='flex' p={16}  style={{outline: '1px solid black', minHeight: '600px', width: '100%', backgroundColor:'rgb(0 0 0 / 80%)', borderRadius: '32px'}}>
            <HistoryList>
                <HistoryItem />
            </HistoryList>
            </Box>
        </Box>
        </>
    )
}

export default History;