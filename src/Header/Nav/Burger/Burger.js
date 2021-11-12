
const Burger = ({click, name, burgerActive, setBurgerActive}) => {
    
    return (
        <div onClick ={click} className={burgerActive ? 'menu__icon icon-menu active' : 'menu__icon icon-menu'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    );
}

export default Burger;

     

