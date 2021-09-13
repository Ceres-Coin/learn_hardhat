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

  it("print blocknumber ",async function() {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
      console.log("Current block number: " + blockNumber);
    });
  });

  it("print ethers.constants ", async function() {
    console.log(`AddressZero: ${ethers.constants.AddressZero}`);
    console.log(`ONE: ${ethers.constants.One}`);
    console.log(`TWO: ${ethers.constants.Two}`);
    console.log(`WeiPerEther: ${ethers.constants.WeiPerEther}`);
    console.log(`Zero: ${ethers.constants.Zero}`);
    console.log(`EtherSymbol: ${ethers.constants.EtherSymbol}`);
    console.log(`HashZero: ${ethers.constants.HashZero}`);
    console.log(`MinInt256: ${ethers.constants.MinInt256}`);
    console.log(`MaxUint256: ${ethers.constants.MaxUint256}`);
    console.log(`MaxInt256: ${ethers.constants.MaxInt256}`);
  });

  it("test cases for web3.eth.getAccounts()", async function() {
    // console.log(await web3.eth.getAccounts());
  });

  it("test cases for web3.eth.getGasPrice", async function() {
    console.log(await web3.eth.getGasPrice());
  });
});