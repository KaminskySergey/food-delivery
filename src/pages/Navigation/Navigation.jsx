import { useSelector } from "react-redux";
import { List, Link } from "./Navigation.styled";
import { selectedIsLoadingUser } from "../../redux/auth/selectors";
const getActiveLink = ({isActive}) => {
    return isActive ? 'active' : '';
    
}

const Navigation = () => {

    const isLoading = useSelector(selectedIsLoadingUser)
    console.log(isLoading, 'isLoadingisLoadingisLoading')
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
        

        <ul>
            <li>
                <Link className={getActiveLink} to='/register'>
                Auth
                </Link>
            </li>
        </ul>
        </>
    )
}

export default Navigation;