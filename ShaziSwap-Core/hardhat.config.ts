import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
  hardhat: 1337,
  mainnet: 1,
  binance: 56,
  polygon: 137,
  avalanche: 43114,
  fantom: 250,
  goerli: 5,
  kovan: 42,
  rinkeby: 4,
  ropsten: 3,
  bscTestnet: 97,
  mumbai: 80001,
  fuji: 43113,
  sepolia: 11155111,
};

const privateKey = process.env.PRIVATE_KEY ?? "NO_PRIVATE_KEY";
const etherscanApiKey = process.env.ETHERSCAN_API_KEY ?? "NO_API_KEY";


const config: HardhatUserConfig = {
  networks:{
    goerli: {
      accounts: [`${privateKey}`],
      chainId: chainIds.goerli,
      url: `https://rpc.ankr.com/eth_goerli`,
      gasPrice: "auto",
    }
  },
  etherscan: {
    apiKey: {
      mainnet: etherscanApiKey,
      goerli: etherscanApiKey,
      kovan: etherscanApiKey,
      rinkeby: etherscanApiKey,
      ropsten: etherscanApiKey,
      // bsc: bscscanApiKey,
      // bscTestnet: bscscanApiKey,
      // polygon: polygonscanApiKey,
      // polygonMumbai: polygonscanApiKey,
      // avalanche: snowscanApiKey,
      // avalancheFujiTestnet: snowscanApiKey,
      // opera: ftmscanApiKey,
    },
  },
  solidity: "0.5.16",
};

export default config;
