import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "hardhat-deploy";
import { task } from "hardhat/config";
import dotenv from "dotenv";

dotenv.config();

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

const KOVAN_KEY = process.env.KOVAN_KEY || "sample-kovan-key";
const MNEMONIC = process.env.MNEMONIC || "sample-mnemonic";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "etherscan-api-key";

module.exports = {
  solidity: "0.8.4",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${KOVAN_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "types",
  },
};
