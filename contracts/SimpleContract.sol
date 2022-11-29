// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SimpleContract {

    string public data;
    uint256 nextId = 0;
    uint256 public fund = 0;
    uint256 countKucing = 4;

    struct Kucing {
        string name;
        uint256 id;
    }
    
    Kucing[] kucings;

    function addKucing(string memory _name) public {
        Kucing memory newKucing = Kucing(_name, nextId++);
        kucings.push(newKucing);
    }

    modifier checkCountKucings() {
        require(countKucing < totalKucing(), "Not Enuf Cats");
        _;
    }
    // kita received fund kalau dh ade lebih drp 5 kucing
    function receiveFund() external checkCountKucings {
        //countKucing Increment for next fund receiving
        countKucing += totalKucing();

        //contract receive 5 dollar klu dh mematuhi syaratnya (checkCountKucings)
        fund += 5;
    }

    function totalKucing() public virtual view returns (uint256 _totalKucing) {
        return kucings.length;
    }

    function salam() public pure returns (string memory) {
        return "Assalamulaikum~Dunia";
    }

    function setData(string memory _data) public {
        data = _data;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
