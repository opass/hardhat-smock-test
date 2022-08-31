import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {enabled: true, runs: 200},
      evmVersion: "berlin",
      outputSelection: {
        "*": {
          "*": ["storageLayout"],
        }
      }
    }
  },
};

export default config;
