import { Link } from "react-router-dom";
import logo from './logo.png'
import styles from './Header.module.css'
import MenuLink from "components/MenuLink";

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.containerHeader}>
                <Link to="./">
                    <img className={styles.logo} src={logo} alt='logo'/>
                </Link>
                <nav>
                    <MenuLink link='./'>
                        Home
                    </MenuLink>
                    <MenuLink link='/favoritos'>
                        Favoritos
                    </MenuLink>
                </nav>
            </div>
        </div>
    )
}
export default Header;