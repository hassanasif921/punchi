import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import footerCat from '../assets/img/footercat.png';
import socialIcon1 from '../assets/img/socialIcon1.png';
import socialIcon2 from '../assets/img/socialIcon2.png';
import socialIcon3 from '../assets/img/socialIcon3.png';
import socialIcon4 from '../assets/img/socialIcon4.png';
import socialIcon5 from '../assets/img/socialIcon5.png';
import socialIcon6 from '../assets/img/socialIcon6.png';
import socialIcon7 from '../assets/img/socialIcon7.png';
import socialIcon8 from '../assets/img/socialIcon8.png';
import socialIcon9 from '../assets/img/socialIcon9.png';
import socialIcon10 from '../assets/img/socialIcon10.png';
import socialIcon11 from '../assets/img/socialIcon11.png';
import socialIcon12 from '../assets/img/socialIcon12.png';
import twitter from '../assets/img/twitter.png';
import tlegram from '../assets/img/tlegram.png';
import FooterLogo from '../assets/img/FooterLogo.png';

export default function Footer() {
  const icon = [
    {
      icon: socialIcon1
    },
    {
      icon: socialIcon2
    },
    {
      icon: socialIcon3
    },
    {
      icon: socialIcon4
    },
    {
      icon: socialIcon5
    },
    {
      icon: socialIcon6
    },
    {
      icon: socialIcon7
    },
    {
      icon: socialIcon8
    },
    {
      icon: socialIcon9
    },
    {
      icon: socialIcon10
    },
    {
      icon: socialIcon11
    },
    {
      icon: socialIcon12
    },
  ]
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
    <footer className="footer-area">
      <Container >
        <Row className="justify-content-between align-items-end">
          <Col lg={6} className="text-center text-lg-start">
            <div className="d-flex align-items-end gap-5 justify-content-center justify-content-lg-start">
              <a href="#" className="footer-logo mb-4 mb-lg-0">
                <img src={FooterLogo} alt="" />
              </a>
              <figure className="footercat d-none d-lg-block">
                <img src={footerCat} alt="" />
              </figure>
            </div>
          </Col>
          <Col lg={6} className="text-lg-end">
            <div className="partner-wrapper">
              <h4 className="text-lg-start text-center">our partners</h4>
              <ul className="partners-inner mt-3 justify-content-center justify-content-lg-start">
                {icon.map((item, index) => (
                  <li key={index}><img src={item.icon} alt="" /></li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="footer-bottom">
        <Row className="align-items-center">
          <Col lg={5} className="text-center text-lg-start order-2 order-lg-1">
            <p className="copyright">©
              <script>
                document.write(new Date().getFullYear());
              </script> ,punchionsol.com ,all rights reserved.
            </p>
          </Col>
          <Col lg={7} className="mt-lg-2 mb-3 mb-lg-0 order-1 order-lg-2">
            <div className="footer-bottom-right d-flex  align-items-center justify-content-center justify-content-lg-end ">
              <ul className="footer-menu">
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#roadmap">roadmap</a></li>
                <li><a href="#punchinomics">punchinomics</a></li>
              </ul>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
