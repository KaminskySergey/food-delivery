
import Header from "../../pages/Header/Header"


const Layout = ({children}) => {
    return (
        <>
        <Header />
        
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout