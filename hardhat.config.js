require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: "./config.env" });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    // rinkeby: {
    //   url: process.env.REACT_APP_RINKEBY_RPC_URL,
    //   accounts: [process.env.REACT_APP_PRIVATE_KEY]
    // },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/TLhrP5QgRxZ9FmyGlvDzyZQJ6yxIVv8j",
      accounts: ["f08df35c18fd742d71961ce4a408a9770008505ff8f0cf5552ce6baadea8a1c9"]
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY
  }
};
