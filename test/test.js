const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("testing every function ", function () {
  let owner, p1, p2, p3, p4, contract1, contract;

  beforeEach(async function () {
    [owner, p1, p2, p3, p4] = await ethers.getSigners();
    contract1 = await ethers.getContractFactory("lottery");
    contract = await contract1.deploy();
  });

  describe("", function () {
    it("enter and total function", async function () {
      await contract.connect(p1).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p2).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p3).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p4).enter({ value: ethers.utils.parseEther("2") });
      expect(await contract.total()).to.equal(4);
    });

    it("winner and generatRandom function", async function () {
      await contract.connect(p1).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p2).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p3).enter({ value: ethers.utils.parseEther("2") });
      await contract.connect(p4).enter({ value: ethers.utils.parseEther("2") });
      await contract.Winner();
      let bal = await contract.Bal();
      if (bal == 0) {
        console.log("alright, alright, alright");
      }


    });
  });
});
