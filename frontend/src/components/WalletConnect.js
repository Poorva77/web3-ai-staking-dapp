import { useState } from "react";

export default function WalletConnect() {

    const [wallet, setWallet] = useState("");

    const connectWallet = async () => {

        if(window.ethereum){

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });

            setWallet(accounts[0]);
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>
                Connect Wallet
            </button>

            <p>{wallet}</p>
        </div>
    );
}