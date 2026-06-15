import { useState } from "react";
import axios from "axios";

export default function StakeForm() {

    const [amount, setAmount] = useState("");

    const stakeTokens = async () => {

        const res = await axios.post(
            "http://localhost:5000/api/stake/stake",
            { amount }
        );

        alert("Transaction Hash: " + res.data.txHash);
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