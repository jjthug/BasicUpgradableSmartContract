const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const ProxyDog = artifacts.require("ProxyDog");
const Dogs = artifacts.require("Dogs");
const Storage = artifacts.require("Storage");

describe("ProxyContract", () => {

  let dex, aave;
    before(async () => {
        accounts = await web3.eth.getAccounts();
        dogs = await Dogs.new();
        storage = await Storage.new();
        proxyDog = await ProxyDog.new(dogs.address);
      });

    it("is calling the functional contract - Dogs", async() => {

        proxyDog.setNumberOfDogs(6);
        let number = proxyDog.getNumberOfDogs();
        // assert number was set to 6

    })

});
