import './Style/header.css'
import logo from '../assets/logo.svg'

const Header = () =>{
  return(
    <header className="header">
        <img src={logo} alt="Logo Space X" className="logo" data-aos="fade-up" />
        <nav className="main-nav">
            <ul className="list">
                <li className="item">
                    <a href="#" className="item-link">Falcon 9</a>
                </li>
                <li className="item">
                    <a href="#" className="item-link">Falcon Heavy</a>
                </li>
                <li className="item">
                    <a href="#" className="item-link">Dragon</a>
                </li>
                <li className="item">
                    <a href="#" className="item-link">Updates</a>
                </li>
            </ul>
        </nav>
        <nav className="secondary-nav">
            <ul className="list">
                <li className="item">
                    <a href="#" className="item-link">About</a>
                </li>
                <li className="item">
                    <a href="#" className="item-link">Gallery</a>
                </li>
                <li className="item">
                    <a href="#" className="item-link">Shop</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header