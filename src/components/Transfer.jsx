import React, { useState } from 'react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'; 
import { useWallet } from '@solana/wallet-adapter-react';

const TransferComponent = () => {
    const wallet = useWallet();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleTransfer = async () => {
        if (!wallet.connected) {
            console.error('Wallet not connected');
            return;
        }
    
        const connection = new Connection('https://api.devnet.solana.com');
        const fromPublicKey = wallet.publicKey;
        const toPublicKey = new PublicKey(recipient);
        const lamports = amount * 1000000000; // Amount in SOL (1 SOL = 1,000,000,000 lamports)
    
        // Fetch the recent blockhash
        const recentBlockhash = await connection.getRecentBlockhash();
    
        // Specify the fee payer as the sender
        const feePayer = fromPublicKey;
    
        const transaction = new Transaction({
            recentBlockhash: recentBlockhash.blockhash,
            feePayer: feePayer, // Specify the fee payer
        }).add(
            SystemProgram.transfer({
                fromPubkey: fromPublicKey,
                toPubkey: toPublicKey,
                lamports: lamports,
            })
        );
    
        try {
            const signature = await wallet.signTransaction(transaction);
            const result = await connection.sendRawTransaction(signature.serialize());
            console.log('Transfer successful', result);
        } catch (error) {
            console.error('Error transferring SOL', error);
        }
    };
    
    

    return (
        <div>
            <input
                type="text"
                placeholder="Recipient address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleTransfer}>Transfer</button>
        </div>
    );
};

export default TransferComponent;
