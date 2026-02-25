import './NavBar.css'
import CartWidget from './CartWidget.jsx'

function NavBar(){
    return (
        <nav className='navegator'>
            <img src="src/assets/TribuJerseyLogo.png" alt="" className="logo"/>
            <CartWidget />
        </nav>
    )
}

export default NavBar;