// src/Wallet.js

import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { TransportError } from '@ledgerhq/errors';

const Wallet = () => {
    const { publicKey } = useWallet();

    return (
        <div>
            <WalletMultiButton />
            {/* {publicKey && <p>Connected wallet public key: {publicKey.toBase58()}</p>} */}
        </div>
    );
};

export default Wallet;
