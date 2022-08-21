# Basic Sample Hardhat Project

## Project initialisation steps.
    1. Build the basic project structure with npx create-react-app full-mint-website

    2. npm i -D hardhat

    3. npx hardhat to build the default hardhat project.

    4. npm i -D @openzeppelin/contracts for using openzeppelin wrapped contracts when writing solidity

## Pick up the rinkeby test network ETH tap address：
https://faucets.chain.link/rinkeby [Available and recommended]
https://fauceth.komputing.org/
https://faucet.rinkeby.io/

## Create the application on infura and set the Endpoints type to rinkeby
https://infura.io/dashboard

## Commands related to hardhat deployment.
    1. npx hardhat clean --clean

    2. npx hardhat compile --compile

    The compiled contract is stored in: artifacts/contracts/RoboPunksNFT.sol/RoboPunksNFT.json

    3. npx hardhat run scripts/deploy_RoboPunksNFT.js --network rinkeby
    You need to have ETH in your account at the time of deployment
    The basic idea of deploying and running.
    scripts/deploy_RoboPunksNFT.js will call the local configuration in hardhat.config.js to deploy

    The network parameter is specified in hardhat.config.js, and multiple networks can be configured in hardhat.config.js, specified by the --network parameter

    4. npx hardhat verify --network rinkeby contract address
    The purpose of the above command is to verify our contract again and then see the code in the contract and the corresponding methods when the contract is found on etherscan.io.

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
