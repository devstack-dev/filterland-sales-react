import React, {useState} from "react";
import './Header.scss';
import { Button } from "react-bootstrap";
import Arrow from "../../assets/imgs/arrowWhite.png";
import logoUrl from '../../assets/imgs/fs-logo.svg';
import HamburgerButton from '../../assets/imgs/hamburger-btn.svg';
import HamburgerButto from '../../components/NavHamburger/HamburgerButton'
export default function Header(prop) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  return(
  <>
    <section className="header-contents">
      <div className="imgs"><img src={logoUrl} alt="filterland" /></div>
      <div className="list-content">
        <ul className="header-content-right">
          <li className=" items list">
              Products
          </li>
          <li className=" items list">
              Use Cases
          </li>
          <li className=" items list">
              Developers
          </li>
          <li className="items">
            <Button className="btn-btn">
              Log In
              <span className="arow1"><img src={Arrow} alt="filterland" /></span>
            </Button>
          </li>
          <li className="items"> 
            <Button className="btn-btn">
              Request Access
              <span className="arow"><img src={Arrow} alt="filterland" /></span>
            </Button>
          </li>
          <li>
            <span className="arow2">
              <div>
                <nav 
                  onClick={handleToggle} width="100%">{navbarOpen?(
                    <HamburgerButto />
                  ) : (
                    <img src={HamburgerButton} alt="filterland"/>
                  )}
                  
                </nav>
              </div>
            </span></li>
        </ul>
      </div>
    </section>
  </>
  )
}