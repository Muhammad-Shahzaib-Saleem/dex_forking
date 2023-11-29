import { ethers } from "hardhat";

async function main() {
 

  const factoryAddress = "";
  const WETH = "0xc778417e063141139fce010982780140aa0cd5ab";
  
 

  const swap_router = await ethers.getContractFactory("SwapRouterV2");
  const swapRouter = await swap_router.deploy(factoryAddress,WETH);

  

  console.log(swapRouter.deploymentTransaction);

  const account = await ethers.getSigners();
  const adminAddress = account[0];

  console.log(
    `admin address ${adminAddress
    } deployed to ${swapRouter.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
