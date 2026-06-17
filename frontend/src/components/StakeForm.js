import { useState, useEffect } from "react";
import axios from "axios";

export default function StakeForm() {

    const [amount, setAmount] = useState("");

    const [stake, setStake] = useState("0");

    const BASE_URL =
    "https://web3-ai-staking-dapp.onrender.com/api/stake";


    // Get current stake

    const getStake = async () => {
        try {
            const res = await axios.get(
                `${BASE_URL}/getStake`
            );
            setStake(res.data.stake);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getStake();
    }, []);

    // Stake

    const stakeTokens = async () => {
        try {
            const res = await axios.post(
                `${BASE_URL}/stake`,
                { amount }
            );
            alert(
                "Transaction Hash:\n" +
                res.data.txHash
            );
            getStake();
        }
        catch(error){
            alert(
                error.response?.data?.error ||
                error.message
            );
        }
    };


    // Withdraw

    const withdrawTokens = async () => {
        try {
            const res = await axios.post(
                `${BASE_URL}/withdraw`
            );
            alert(
                "Withdraw Successful!\n" +
                res.data.txHash
            );
            getStake();
        }
        catch(error){
            alert(
                error.response?.data?.error ||
                error.message
            );
        }
    };

    return (
        <div>
            <h3>
                My Stake
            </h3>

            <p>
                {stake} SCAI
            </p>

            <input
                placeholder="Enter stake amount"
                onChange={(e)=>
                    setAmount(e.target.value)
                }
            />
            <br />
            <br />
            <button
                onClick={stakeTokens}
            >
                Stake
            </button>
            <button
                onClick={withdrawTokens}
                style={{marginLeft:"10px"}}
            >
                Withdraw
            </button>
        </div>
    );
}