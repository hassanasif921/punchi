import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import roadmapTopShap from '../assets/img/roadmapTopShap.png'
import rocket from '../assets/img/rocket.png'
import roadmapBottomIcon from '../assets/img/roadmapBottomIcon.png'

export default function Roadmap() {
    const roadMap = [
        {
            title: 'PHASE 1',
            des: [
                "Concept Creation",
                "Token Development",
                "Community Building",
                "Influencers Marketing",
                "Launch of Presale",
            ]
        },
        {
            title: 'PHASE 2',
            des: [
                "Dex launch",
                "Launch Whitepaper",
                "Gate Listing",
                "Mexc Listing",
                "Okx Listing",
            ]
        },
        {
            title: 'PHASE 3',
            des: [
                "Kucoin Listing",
                "More Cex Listing",
                "PunchiSwap Launch",
                "100,000 Holders",
                "1 Billion MarketCap",
            ]
        },
    ]
    return (
        <div className="roadmap-area" id="roadmap">
            <figure className="roadmapShap">
                <img src={roadmapTopShap} alt="" />
            </figure>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="section-title text-center">
                            <h2>ROADMAP</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="roadmap-wrapper">
                        <div className="vertical-timeline">
                            <figure className="rocket">
                                <img src={rocket} alt="" />
                            </figure>
                            <figure className="roadmapBottomIcon">
                                <img src={roadmapBottomIcon} alt="" />
                            </figure>
                            {roadMap.map((item, index) => (
                                <div className="vertical-timeline-element--work" key={index}>
                                    <div className="vertical-timeline-element-content">
                                        <span className='dot'></span>
                                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                                        <ul>
                                            {item.des.map ((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
