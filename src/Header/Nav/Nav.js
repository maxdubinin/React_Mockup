import React, {useState} from 'react';
import Burger from "./Burger/Burger";



const Nav = ({link}) => {
    const linkItem = link.map(item => <a href={item.path} className={item.class} key={item.text}>{item.text}</a>);

    const [burgerActive, setBurgerActive] = useState(false);

    const handleToggle = () => {
        setBurgerActive(!burgerActive);
      };


    return (
        <nav className="header__menu menu">
            <Burger click={handleToggle} burgerActive = {burgerActive} setBurgerActive = {setBurgerActive}/>
            <div className= {burgerActive ? 'menu__body active': 'menu__body'}>
                {linkItem}
            </div>
        </nav>
    )
}

export default Nav;