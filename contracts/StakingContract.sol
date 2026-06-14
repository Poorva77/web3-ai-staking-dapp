// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract StakingContract {

    mapping(address => uint256) public stakes;

    function stake() public payable {
        require(msg.value > 0, "Stake amount must be greater than 0");

        stakes[msg.sender] += msg.value;
    }

    function getMyStake() public view returns(uint256) {
        return stakes[msg.sender];
    }

    function withdraw() public {

        uint256 amount = stakes[msg.sender];

        require(amount > 0, "No stake found");

        stakes[msg.sender] = 0;

        payable(msg.sender).transfer(amount);
    }
}