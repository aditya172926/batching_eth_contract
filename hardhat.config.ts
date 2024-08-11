import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    'optimism-sepolia': {
      url: 'https://sepolia.optimism.io',
      accounts: [""],
    },
  },
  etherscan: {
    apiKey: {
      'optimism-sepolia': "abc"
    },
    customChains: [
      {
        network: 'optimism-sepolia',
        chainId: 11155420,
        urls: {
          apiURL: "https://optimism-sepolia.blockscout.com/api",
          browserURL: "https://optimism-sepolia.blockscout.com/",
        }
      }
    ]
  }
};

export default config;
