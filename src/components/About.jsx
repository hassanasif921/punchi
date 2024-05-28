import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import aboutBg from '../assets/img/about-bg.png'
import icon1 from '../assets/img/about-icon1.png'
import icon2 from '../assets/img/about-icon2.png'

export default function About() {
  const card = [
    {
      icon: icon1,
      title: 'DOWNLOAD DEX',
      des: "Download and install Solflare or Phantom on the appstore, or, alternatively if you're on desktop download and install the browser extension.",
    },
    {
      icon: icon1,
      title: 'Secure your sol',
      des: "Now all you've got to do is buy your SOL in the DEX APP, or, alternatively you can use an exchange and deposit using your wallet address.",
    },
    {
      icon: icon2,
      title: 'Buy some $punchi',
      des: "Now go to your wallet ,copy our provided wallet by copy icon and send sol to our provided wallet.$PUNCHI will be airdroped to sending wallet.",
    },
    {
      icon: icon1,
      title: 'Add to your wallet',
      des: "Now you're all set! Welcome aboard the next rocket to the moon, just import the contract address to view you're holdings.",
    },
  ]
  return (
    <div className="about" id="about">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="section-title">
              <h2>About us</h2>
            </div>
          </Col>
        </Row>
        <Row >
          <Col xs={12}>
            <div className="about-title">
              <h6>How to buy ?</h6>
            </div>
          </Col>
        </Row>
        <Row className=" mb-lg-3 ">
          {card.map((item, index) => (
            <Col lg={3} md={6} className=" mt-lg-0 mb-5" key={index}>
              <div className="about-card position-relative z-1">
                <div className="position-absolute  z-3  about-card-img "><img src={item.icon} alt="" /></div>
                <div className="about-card-content text-center ">
                  <h5 className="card-title text-uppercase ">{item.title}</h5>
                  <p className="p1">{item.des}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="position-relative z-1">
          <Row className="about-section">
            <Col xs={12} lg={6} >
              <div className="about-section-left position-relative z-1 ">
                <div className="image"><img src={aboutBg} alt="" /></div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="d-flex  align-items-center  justify-content-center  ">
              <div className="about-section-right">
                <h3 className="text-uppercase ">about punchi on sol </h3>
                <p>Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way,
                  Punchi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelieveable gains and takeover the meme space with secret formulas.</p>
                <p className="p2">Launching with zero taxes and locked LP, $PUNCHI is a coin for the people, forever. Fueled by pure memetic power, and magic cosmic dust, let Punchi rise and shine. Made by veterans.
                </p>
                <div className="about-section-right-btn d-flex justify-content-between align-items-center  ">
                  <button>Immutable</button>
                  <button>revoked mint</button>
                  <button>Revoked Freeze</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
