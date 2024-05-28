// import { React } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Aos from 'aos'
import { useEffect } from 'react'
import TransferComponent from './components/Transfer';
import WalletAdapter from './utails/Wallet'
import { WalletProvider } from '@solana/wallet-adapter-react';
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Roadmap />
      <Tokenomics />
      <Faq/>
      <Footer />
    </>
  )
}


