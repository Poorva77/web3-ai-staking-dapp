// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StakingContract {

    address public owner;

    mapping(address => uint256) private stakes;

    uint256 public totalStaked;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function stake() public payable {

        require(msg.value > 0, "Stake amount must be greater than zero");

        stakes[msg.sender] += msg.value;
        totalStaked += msg.value;

        emit Staked(msg.sender, msg.value);
    }

    function getMyStake() public view returns (uint256) {
        return stakes[msg.sender];
    }

    function withdraw() public {

        uint256 amount = stakes[msg.sender];

        require(amount > 0, "No funds available");

        stakes[msg.sender] = 0;

        totalStaked -= amount;

        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }

    function getTotalStaked() public view returns (uint256) {
        return totalStaked;
    }
}