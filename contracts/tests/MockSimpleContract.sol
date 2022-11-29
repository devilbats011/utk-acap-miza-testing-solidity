// SPDX-License-Identifier: GPL-3.0
import "../SimpleContract.sol";
pragma solidity >=0.7.0 <0.9.0;

contract MockSimpleContract is SimpleContract {

    uint8 fakeTotalKucing = 0;

    function setFakeTotalKucing(uint8 num) public {
        fakeTotalKucing = num;
    }

    function getFakeTotalKucing() view public returns (uint8 _fakeTotalKucing) {
        return fakeTotalKucing;
    }

    function totalKucing() override  public view returns (uint256 _totalKucing) {
        return fakeTotalKucing;
    }
}
