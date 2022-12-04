// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Tickets {
    address public owner = msg.sender;
    uint256 constant public TOTAL_TICKETS = 10;

    struct Ticket {
        uint256 price;
        address owner;
    }

    Ticket[TOTAL_TICKETS] public tickets;

    constructor() {
        for (uint256 index = 0; index < TOTAL_TICKETS; index++) {
            tickets[index].price = 1e17; //0.1 ETH
            tickets[index].owner = address(0x0);
        }
    }

    function buyTicket(uint256 _index) external payable {
        require(_index < TOTAL_TICKETS && _index >= 0);
        require(tickets[_index].owner == address(0x0));
        require(msg.value >= tickets[_index].price);
        tickets[_index].owner = msg.sender;
    }
}
