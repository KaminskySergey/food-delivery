
import { Suspense } from "react"
import Header from "../../pages/Header/Header"
import { Outlet } from "react-router-dom"


const Layout = ({children}) => {
    return (
        <>
        <Header />
        
        <main>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
        </main>
        </>
    )
}

export default Layout