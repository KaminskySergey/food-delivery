import { useDispatch, useSelector } from "react-redux";
import { List, Link, DivLogout, UserName, ButtonLogout } from "./Navigation.styled";
import { selectedIsLoadingUser, selectedUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
const getActiveLink = ({isActive}) => {
    return isActive ? 'active' : '';
    
}

const Navigation = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectedIsLoadingUser)
    const nameUser = useSelector(selectedUser)
    

    return (
        <>
        <List>
            <li className="nav-link">
                <Link className={getActiveLink} to="/shop" >
                    Shop
                </Link>
            </li>
            <li className="nav-link">
                <Link className={getActiveLink} to="/shoping" >
                    Shopping Cart
                </Link>
            </li>
            {isLoading && <li className="nav-link">
                <Link className={getActiveLink} to="/shoping" >
                    Orders
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
                <Link className={getActiveLink} to='/register'>
                Auth
                </Link>
            </li>
        </ul>}
        </>
    )
}

export default Navigation;