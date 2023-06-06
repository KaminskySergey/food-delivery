import { useDispatch, useSelector } from "react-redux";
import { List, Link, DivLogout, UserName, ButtonLogout, LinkAuth } from "./Navigation.styled";
import { selectedIsLoadingUser, selectedUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const Navigation = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectedIsLoadingUser)
    const nameUser = useSelector(selectedUser)
    

    return (
        <>
        <List>
            <li className="nav-link">
                <Link  to="/shop" >
                    Shop
                </Link>
            </li>
            <li className="nav-link">
                <Link  to="/shoping" >
                    Shopping Cart
                </Link>
            </li>
            {isLoading && <li className="nav-link">
                <Link to="/history" >
                    History
                </Link>
            </li>}
            
        </List>
        

        {isLoading ? 
        <DivLogout>
            <UserName >Вітаю {nameUser.user.name}</UserName>
            <ButtonLogout onClick={() => dispatch(logout())} type="button">Вийти</ButtonLogout>
        </DivLogout> 
        :
        <ul>
            <li>
                <LinkAuth to='/register'>
                Auth
                </LinkAuth>
            </li>
        </ul>}
        </>
    )
}

export default Navigation;