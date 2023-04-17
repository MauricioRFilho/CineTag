const { Link } = require("react-router-dom");

function MenuLink({link, children}){
    return(
        <Link to={link}>
            { children }
        </Link>
    )
}

export default MenuLink