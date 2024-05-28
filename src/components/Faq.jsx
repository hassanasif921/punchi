import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import faqImg from '../assets/img/faq-img.png'

export default function Faq() {
    const faq = [
        {
            title: 'WHAT IS $PUNCHI ?',
            des: '$PUNCHI is a cutest cat on Solana Network,seeks to change the focus of meme coins by bringing fun and adding value to the crypto ecosystem.',
        },
        {
            title: 'WHY LAUNCH ON SOLANA?',
            des: '$PUNCHI token created on solana networks due to its security,low transaction fees,fast network speed.',

        },
        {
            title: 'HOW TO GET PUNCHI ?',
            des: 'You can get Punchi Token by join in presale.Just send Sol to our provided wallet and token will be airdrop to your sending wallet.later you will be able to buy Punchi token on both Dex and Cex.',
        },
        {
            title: 'HOW TO CONTACT SUPPORT?',
            des: 'You can contact support anytime 24/7 through our X handle,telegram and by sending a message to support@punchionsol.com',
        }
    ]
    return (
        <div className="faqArea" id="faq">
            <Container className="container faqArea-wrapper">
                <Row>
                    <Col xs={12} className="text-center ">
                        <div className="section-title text-center">
                            <h2>F.A.Q</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6} xxl={7} className="faq-wrapper-item">
                        <div className="faqArea-wrapper-left" id="accordionExample">
                            {faq.map((item, index) => (
                                <div className="faq-item" data-aos="fade-up" data-aos-duration="1400" key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.des}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} lg={6} xxl={5}>
                        <div className="faqArea-wrapper-image"><img src={faqImg} alt="" /></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
