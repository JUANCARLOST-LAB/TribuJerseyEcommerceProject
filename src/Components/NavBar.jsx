import './NavBar.css'
import CartWidget from './CartWidget.jsx'

function NavBar(){
    return (
        <nav className='navegator'>
            <img src="src/assets/TribuJerseyLogo.png" alt="" className="logo"/>
            <div className="navigationLinks">
                <a href="">La Liga</a>
                <a href="">Premier League</a>
                <a href="">Bundesliga</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar; 