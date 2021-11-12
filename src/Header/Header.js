import Container from "../Container/Container"
import Logo from "./Logo";
import Nav from "./Nav";


const linkObj = {
    link: [
        { path: '#', text: "About", class: "menu__link" },
        { path: '#', text: "Media", class: "menu__link" },
        { path: '#', text: "Events", class: "menu__link" },
        { path: '#', text: "Shop", class: "menu__link" },
        { path: '#', text: "Give", class: "menu__link" },

    ]
}

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header__row">
                    <Logo logoName="logo" />
                    <Nav link={linkObj.link} />
                </div>
                
            </Container>
        </header>
    )
}

export default Header;