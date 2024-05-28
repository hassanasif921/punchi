import {useState} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import copyIcon from '../assets/img/copyIcon.svg'
import Chart from '../assets/img/Chart.png'
import tokenBShap from '../assets/img/token-bShap.png'

import checked from '../assets/img/checked.svg'

export default function Tokenomics() {
    const tkcard = [
        {
            title: 'TOKEN NAME:',
            des: 'PUNCHI ON SOL',
        },
        {
            title: 'TOKEN TICKER',
            des: '$PUNCHI',

        },
        {
            title: 'total supply',
            des: '100,000,000,000',
        },
        {
            title: 'blockchain',
            des: 'solana',
        }
    ];
    const [copied, setCopied] = useState(false);
    const token = 'Contract Coming Soon'
    const clickHandle = () => {
        navigator.clipboard.writeText(token).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 3000)
        }).catch(err => console.error(err))
    }
    return (
        <div className="tokenomics-area" id="tokenomics">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="section-title text-center">
                            <h2>punchinomics</h2>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6} >
                        <div className="tokenomics-content-area">
                            <div className="no-nonsense-box">
                                <h4>NO TAX. NO NONSENSE</h4>
                                <p>trackable via the blockchain. PUNCHI, bestows prosperity on its followers with zero taxes for $PUNCHI transactions. The economy thrives with PUNCHI’s guidance and the faithful reap the rewards.</p>
                                <p>$PUNCHI is a custest cat on Solana Blockchain.$PUNCHI is 100% decentralized,safe and secure. </p>
                                <h5>Contract Address:</h5>
                                <div className="copytoclipboard">
                                    <input type="text" id="textToCopy1" value="Contract Coming Soon" readOnly="" />
                                    <button onClick={() => clickHandle()}>
                                        <span>
                                            <img className="copy1" src={copied ? checked : copyIcon} alt="" />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="token-item-wrapper">
                                {tkcard.map((item, index) => (
                                    <div className="single-item" key={index}>
                                        <h5>{item.title}</h5>
                                        <h6>{item.des}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} >
                        <div className="tokenomicsRight text-center">
                            <img src={Chart} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <figure className="token-bShap">
                <img src={tokenBShap} alt="" />
            </figure>
        </div>
    )
}
