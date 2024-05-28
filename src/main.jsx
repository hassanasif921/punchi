import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'
import 'aos/dist/aos.css';

import WalletContextProvider from './utails/WalletProvider.jsx';
// import { Buffer } from 'buffer';
// import process from 'process';


// global.Buffer = Buffer;
// globalThis.process = process;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <WalletContextProvider>
      <App />
    </WalletContextProvider>
  </React.StrictMode>,
)
