/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
const bsctestnet_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.7.3",
  networks: {
    bscTestnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`
      // accounts: [`0x${bsctestnet_PRIVATE_KEY}`],
    },
  },
};
