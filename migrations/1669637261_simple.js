const simpleArtifact = artifacts.require('./SimpleContract.sol');
module.exports = function(_deployer) {
  _deployer.deploy(simpleArtifact,"-Migration SIMPLE-");
};
