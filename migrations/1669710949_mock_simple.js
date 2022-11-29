const mockSimpleArtifact = artifacts.require('./tests/MockSimpleContract.sol');

module.exports = function(_deployer) {
  _deployer.deploy(mockSimpleArtifact,"-Mock Migration SIMPLE-");
};

