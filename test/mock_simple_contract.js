const mock_simple_contract = artifacts.require("mockSimpleContract");

contract("mockSimpleContract", function () {
  it("Meow Contract", async function () {
    const instance = await mock_simple_contract.deployed();
    //mock total Kucing
    await instance.setFakeTotalKucing(5);

    await instance.receiveFund();
    // const k = await instance.totalKucing();
    // assert(5 == k);
    assert.equal(await instance.fund(), 5, "Fund Should be 5 ,meow");
  });
});
