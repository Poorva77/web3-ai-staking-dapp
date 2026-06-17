import { useState } from "react";
import axios from "axios";

export default function StakeForm() {

    const [amount, setAmount] = useState("");

    const stakeTokens = async () => {

    try {

        const res = await axios.post(
            "https://web3-ai-staking-dapp.onrender.com/api/stake/stake",
            { amount }
        );

        console.log(res.data);

        alert("Transaction Hash: " + res.data.txHash);

    } catch (error) {

        console.log(error);

        alert(
            error.response?.data?.error ||
            error.message
        );
    }
};

    return (
        <div>

            <input
                placeholder="Enter stake amount"
                onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={stakeTokens}>
                Stake
            </button>

        </div>
    );
}