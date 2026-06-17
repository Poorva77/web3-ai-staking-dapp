import { useState } from "react";

export default function WalletConnect() {

    const [wallet, setWallet] = useState("");

    const connectWallet = async () => {

        // MetaMask not installed
        if (!window.ethereum) {

            alert(
                "MetaMask not detected!\nPlease install MetaMask extension."
            );

            return;
        }

        try {

            const accounts = await window.ethereum.request({

                method: "eth_requestAccounts"

            });

            setWallet(accounts[0]);

        }

        catch (error) {

            alert("Wallet connection failed.");

            console.log(error);

        }

    };

    return (

        <div>

            <button onClick={connectWallet}>

                Connect Wallet

            </button>

            {

                wallet ?

                <p>

                    Wallet Connected:

                    <br/>

                    {wallet.slice(0,6)}

                    ...

                    {wallet.slice(-4)}

                </p>

                :

                <p>

                    Wallet Not Connected

                </p>

            }

        </div>

    );

}