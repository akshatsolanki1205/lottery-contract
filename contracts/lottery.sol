//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract lottery {
    address public owner;
    address payable[] public players;

    constructor() {
        owner = msg.sender;
    }

    //participate in the lottery

    function enter() public payable {
        require(msg.value == 2 ether, "2 ethers is the ticket price");
        players.push(payable(msg.sender));
        delete players;
    }

    function Bal() public view returns (uint) {
        return address(this).balance;
    }

    //generateRandom number

    function generateRandom() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    //pick winner

    function Winner() public onlyOwner {
        uint r = generateRandom() % players.length;
        players[r].transfer(address(this).balance);
    }

    //total number of players
    function total() public view returns (uint) {
        return players.length;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}
