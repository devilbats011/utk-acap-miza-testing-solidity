const simpleContract = artifacts.require("simpleContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("simpleContract", function (/* accounts */) {
  var deployedContract = undefined;

  before(async () => {
    deployedContract = await simpleContract.deployed();
  });

  it("~~ Salam Test ~~", async function () {
    const salamMessage = await deployedContract.salam();

    console.log(deployedContract.address);
    console.log(salamMessage);

    assert.isNotEmpty(deployedContract.address);
    assert(salamMessage == "Assalamulaikum~Dunia");
  });

  it("~~ Set Get Data Test ~~", async function () {
    const message = "let's-Go!";
    await deployedContract.setData(message);
    return assert(message, await deployedContract.getData());
  });

  it("test total Kucings", async function () {
    assert.equal(await deployedContract.totalKucing(), 0, "Expected to be 0");
    await deployedContract.addKucing("Si Hitam");
    return assert(await deployedContract.totalKucing(), 1);
  });

  /** 
   * * Refer Learning
   //https://trufflesuite.com/docs/truffle/how-to/debug-test/write-tests-in-javascript/
   //https://www.youtube.com/watch?v=b2VInFwZmNw&t=489s
   *  **/
  
});
