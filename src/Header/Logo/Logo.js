import logo from "../../img/header_logo.png";

const Logo = ({logoName}) => {
    return (
        <img src={logo} alt={logoName} className="logo__img"></img>
    )
}

export default Logo;