const tickets = artifacts.require("./Tickets.sol");

module.exports = function (_deployer) {
    _deployer.deploy(tickets);
};


// @ FROM GITHUB : https://github.com/codyseibert/web3-tickets/blob/master/migrations/2_tickets.js
// const Tickets = artifacts.require("Tickets");

// module.exports = function (deployer) {
//   deployer.deploy(Tickets);
// };