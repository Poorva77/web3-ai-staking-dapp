const { ethers } = require("ethers");

const contractABI = [
    "function stake() public payable"
];

const contractAddress = "YOUR_SCAI_CONTRACT_ADDRESS";

const provider = new ethers.JsonRpcProvider("YOUR_SCAI_RPC_URL");

const wallet = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    provider
);

const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    wallet
);

exports.stakeAmount = async (req, res) => {
    try {
        const { amount } = req.body;

        const tx = await contract.stake({
            value: ethers.parseEther(amount.toString())
        });

        await tx.wait();

        res.json({
            success: true,
            txHash: tx.hash
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};