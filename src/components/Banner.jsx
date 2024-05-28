import React, { useState, useEffect, useRef } from 'react';
import { Buffer } from 'buffer';
import { Col, Container, Row } from 'react-bootstrap';
import cloud from '../assets/img/cloud.png';
import heroLImg from '../assets/img/heroLImg.png';
import quarCode from '../assets/img/quarCode.png';
import heroRImg from '../assets/img/heroRImg.png';
import copyIcon from '../assets/img/copyIcon.svg';
import checked from '../assets/img/checked.svg';
import sol from '../assets/img/sol.png';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, SystemProgram, Transaction, PublicKey, clusterApiUrl } from '@solana/web3.js';
import WalletAdapter from '../utails/Wallet';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Banner() {
  const { publicKey, signTransaction, connected } = useWallet();
  const [recipient, setRecipient] = useState('2NGeE2Ad6GXJm7gJ2Gv7BGHoSQKzcayhoKhLrHwwg1dt');
  const [amount, setAmount] = useState('');
  const buttonRef = useRef(null);

  const handleClick = () => {
    const walletConnectButton = document.querySelector('#home > div > div > div > div > div > div:nth-child(5) > div > div > button');
    console.log(walletConnectButton)
    if (walletConnectButton) {
      walletConnectButton.click();
    }
  };

  const handleTransfer = async () => {
    try {
      if (!connected) {
        handleClick(); // Show wallet connect modal
        console.error('Wallet not connected');
        return;
      }

      const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=0570c943-5cbf-4ff4-9397-02270f156e68');
      const fromPublicKey = publicKey;
      const toPublicKey = new PublicKey(recipient);
      const lamports = parseInt(amount) * 1000000000; // Amount in SOL (1 SOL = 1,000,000,000 lamports)
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromPublicKey,
          toPubkey: toPublicKey,
          lamports: lamports,
        })
      );

      const { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPublicKey;

      const signedTransaction = await signTransaction(transaction);
      const signature = await connection.sendRawTransaction(signedTransaction.serialize());

      await connection.confirmTransaction(signature, 'confirmed');
      console.log('Transfer successful', signature);
    } catch (error) {
      console.error('Error transferring SOL', error);
    }
  };

  
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const token = '2NGeE2Ad6GXJm7gJ2Gv7BGHoSQKzcayhoKhLrHwwg1dt';

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setMessage('Wallet Copied To Clipboard.');
      setTimeout(() => {
        setMessage('');
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setMessage('Copy not supported or blocked. Press Ctrl+C to copy.');
      setTimeout(() => setMessage(''), 3000);
    }
    document.body.removeChild(textarea);
  };
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  return (
    <section className="banner-area" id="home">
      <figure className="cloud">
        <img src={cloud} alt="cloud" />
      </figure>
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <div className="banner-content text-center">
              <figure className="heroLImg">
                <img src={heroLImg} alt="hero left" />
              </figure>
              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-offset="0">$punchi on sol</h1>
              <div className="presale-box">
                <h4>Presale Starts In</h4>
                <div id="countdown">
                  {Object.entries(timeLeft).map(([unit, value], index) => (
                    <div className="single-item" key={index}>
                      <span>{value}</span>
                      <h5>{unit}</h5>
                    </div>
                  ))}
                </div>
                <div className="copytoclipboard1 container mt-4">
                  <input 
                    type="number"
                    id="copyTarget"
                    placeholder="Enter SOL Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button>
                    <span>
                      <img className="copy0" src={sol} alt="sol" />
                    </span>
                  </button>
                </div>
                <br />
                <div style={{display:'none'}}>
            <WalletAdapter>
            <WalletMultiButton ref={buttonRef} style={{ backgroundColor: '#f6bc00' }} />
            </WalletAdapter>
            {/* <button onClick={handleClick}>Click Me</button> */}
        </div>
                <a style={{cursor: 'pointer'}} onClick={handleTransfer} className="boxed-btn mt-0">Buy Now</a>
                <h5 className="send_sol">Can't Connect, send SOL to</h5>
                <div className="copytoclipboard">
                  <input type="text" id="copyTarget" value={token} readOnly />
                  <span id="msg">{message}</span>
                  {publicKey && (
                  <button onClick={() => copyToClipboard(token)}>
                    <span>
                      <img className="copy0" src={copyIcon} alt="copy" />
                    </span>
                  </button>
                  )}
                  {copied && <img className="checked" src={checked} alt="checked" />}
                </div>
                <div className="scan_wallet d-none">
                  <img src={quarCode} alt="QR code" />
                  <button>Scan Wallet</button>
                </div>
                <br />
                <div className="note">
                  <p>Token will be airdropped to sending wallet</p>
                  <p>Note: Only send SOL from a DEX wallet</p>
                </div>
              </div>
              <figure className="heroRImg">
                <img src={heroRImg} alt="hero right" />
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
