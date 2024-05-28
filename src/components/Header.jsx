import React, { useEffect, useState, useRef } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import Logo from '../assets/img/logo.png'
import twitter from '../assets/img/twitter.png'
import tlegram from '../assets/img/tlegram.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import WalletAdapter from '../utails/Wallet'
import { useWallet } from '@solana/wallet-adapter-react';

export default function Header() {

  const { publicKey } = useWallet();
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart  = (event) => {
    navigate(event);
    setIsMenu(!isMenu);
  };
  
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const social = [
    {
      url:"https://www.google.com",
      icon: twitter
    },
    {
      url:"https://t.me/PunchiTalk",
      icon: tlegram
    },
  ]
  return (
      <header className={`header-area ${scrolled ? 'position-fixed' : ''}`}>
        <Navbar collapseOnSelect expand="lg" className='pt-0'>
          <Container>
            <div className="header-left d-flex align-items-center">
              <a className="navbar-brand navbar-logo" href="https://punchionsol.com/"  onClick={scrollToTop}>
                <img src={Logo} alt="" />
              </a>
              <ul className="social-links">
                {social.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank">
                      <img src={item.icon} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav  className="navbar-nav main-menu ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <Link to="home" onClick={scrollToTop} className='heading-link' spy={true} smooth={true} offset={-150} duration={170} >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className='heading-link' spy={true} smooth={true} offset={-150} duration={170} >About</Link>
                </li>
                <li className="nav-item">
                  <Link to="roadmap" className='heading-link' spy={true} smooth={true} offset={-150} duration={50} >Roadmap</Link>
                </li>
                <li className="nav-item">
                  <Link to="tokenomics" className='heading-link' spy={true} smooth={true} offset={-150} duration={170} >punchinomics</Link>
                </li>
                <li className="nav-item">
                  <Link to="faq" className='heading-link' spy={true} smooth={true} offset={-150} duration={50} >Faq</Link>
                </li>
              </Nav>
              <div className="header-right">
                {/* <a href="https://punchionsol.com/sell.html" className="boxed-btn mt-0">CONNECT WALLET</a> */}
                <WalletAdapter>
                <WalletMultiButton style={{backgroundColor:'#f6bc00'}}/>
                </WalletAdapter>
                {/* {publicKey && <p>Connected wallet public key: {publicKey.toBase58()}</p>} */}
              </div>
            </Navbar.Collapse>
          </Container>
          </Navbar>
      </header>
  )
}
