import Box from "../../components/Box/Box";
import { ContImg, Link } from "./Home.styled";

import backgroundImage from './pngwing.com.png'

const Home = () => {
    return (
        <>
        <Box width={'50%'} ml='auto' mr='auto' pt={96} pb={32} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
        <ContImg >
                <img src={backgroundImage} alt="background" />
            </ContImg>
            <div>
                <h1 style={{textAlign: 'center', marginBottom: 32}}>
                Food delivery
                </h1>
                <Box width={350} style={{textAlign:'center', display:'flex', flexDirection:'column'}}>
                    <h2 style={{fontSize: '20px', textAlign: 'center', marginBottom: '32px'}}>
                    Food delivery by airplane worldwide.
                    </h2>
                    <Box>
                    <Link  to='/shop'>
                    I want to eat
                    </Link>
                    </Box>
                </Box>
            </div>
            
        </Box>
        
        </>
    )
}

export default Home;