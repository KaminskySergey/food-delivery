import Box from "../../../components/Box/Box"
import ShopingCardItem from "./ShopingCardItem/ShopingCardItem"
import ShopingCardList from "./ShopingCardList/ShopingCardList"

const ShopingCard = () => {
    return (
        <>
        <Box width='50%' height='100%' ml={16} style={{outline: '1px solid yellow', borderRadius:'16px', padding: '8px 8px 0 8px', overflowY: 'scroll'}}>
            <ShopingCardList>
                <ShopingCardItem  />
            </ShopingCardList>
        </Box>
        </>
    )
}

export default ShopingCard