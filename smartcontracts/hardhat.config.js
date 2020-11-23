require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const RINKEBY_PRIVATE_KEY = "3c0fc7d8c48c6b46ee9d62c0f66c161a99d5718bc1327bc8c489e3cfff8acd76";
//Address 0x806D6b6725A21409B2FFF7B1D079a4c4c5EA8AD1

const INFURA_PROJECT_ID = "27f3715e7c9b4bd8b5777d468e64c9a7";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "KP7XKBDKWU9CNCIAS5X96Y1YTFBT4I892F",
  },
};
