const Tickets = artifacts.require("Tickets");

module.export = function (_deployer) {
    _deployer.deploy(Tickets);
};


// @ FROM GITHUB : https://github.com/codyseibert/web3-tickets/blob/master/migrations/2_tickets.js
// const Tickets = artifacts.require("Tickets");

// module.exports = function (deployer) {
//   deployer.deploy(Tickets);
// };