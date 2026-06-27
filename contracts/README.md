# Smart Contract Development

## Overview

This smart contract serves as the core of the Web3 AI Staking DApp. It enables users to securely stake SCAI tokens, monitor their staking balance, and withdraw their funds through decentralized blockchain transactions.

The contract is written in Solidity and deployed on the SecureChain (SCAI) Mainnet.

---

## Features

- Stake cryptocurrency
- Withdraw staked funds
- View personal staking balance
- View total amount staked
- Event logging for blockchain transparency
- Input validation using `require()`

---

## Smart Contract Functions

| Function | Description |
|----------|-------------|
| `stake()` | Allows users to deposit SCAI into the staking contract. |
| `getMyStake()` | Returns the staking balance of the connected wallet. |
| `withdraw()` | Withdraws the user's complete stake. |
| `getTotalStaked()` | Returns the total amount of SCAI currently staked. |

---

## Smart Contract Variables

| Variable | Purpose |
|----------|---------|
| `owner` | Stores the contract owner's address. |
| `stakes` | Maintains staking balances for each wallet. |
| `totalStaked` | Tracks the total amount staked by all users. |

---

## Events

### Staked

Triggered whenever a user stakes cryptocurrency.

### Withdrawn

Triggered whenever a user withdraws their stake.

---

## Example Workflow

### Stake

Input

```

0.5 SCAI

```

Output

```

User stake = 0.5 SCAI

Total staked increases by 0.5 SCAI

```

---

### Withdraw

Input

```

Withdraw

```

Output

```

Funds transferred back to wallet

Stake becomes zero

```

---

## Security Features

- Prevents zero-value staking.
- Ensures only users can withdraw their own funds.
- Resets balance before fund transfer.
- Uses Solidity `require()` statements for validation.

---

## Learning Outcomes

Through this implementation, I learned:

- Solidity smart contract development
- State variable management
- Mappings
- Events
- Payable functions
- Smart contract deployment on SecureChain Mainnet
- Blockchain transaction handling

---

## Deployment

Network:

SecureChain (SCAI) Mainnet

Contract Address:

`YOUR_DEPLOYED_CONTRACT_ADDRESS`