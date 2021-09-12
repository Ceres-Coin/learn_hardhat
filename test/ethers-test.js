const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("test/ethers-test.js", function () {
  it("test001", async function () {
    console.log(`test001`)
  });

  it("test002", async function() {
    const [acc0,acc1,acc2] = await ethers.getSigners();
    console.log(`acc0: ${acc0.address}`);
    console.log(`acc1: ${acc1.address}`);
    console.log(`acc2: ${acc2.address}`);
  });
});