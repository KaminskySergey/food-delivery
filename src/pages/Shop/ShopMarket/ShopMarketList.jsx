import ShopMarketItem from "./ShopMarketItem"

const ShopMarketList = ({shops, shopIdDisabled}) => {
    return (
        <>
        <ul style={{display: 'flex', flexDirection: 'column'}}>
            <ShopMarketItem shopIdDisabled={shopIdDisabled} items={shops}/>
        </ul>
        </>
    )
}

export default ShopMarketList