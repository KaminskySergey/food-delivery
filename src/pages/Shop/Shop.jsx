


import ShopCard from "../../pages/Shop/ShopCard/ShopCard"
import ShopMarket from "../../pages/Shop/ShopMarket/ShopMarket"

import Box from "../../components/Box/Box"



const Shop = () => {

    
    return (
        <>
        <Box width={'99%'} ml='auto' mr='auto' pt={96}  style={{borderRadius: '30px', display: 'flex'}}>
                <Box display='flex' p={16}  style={{outline: '1px solid black', minHeight: '600px', width: '100%', backgroundColor:'rgb(0 0 0 / 80%)', borderRadius: '32px'}}>
                    
            <ShopMarket />
            <ShopCard  />
                
                </Box>
            </Box>
        </>
    )
}

export default Shop