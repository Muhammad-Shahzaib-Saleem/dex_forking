import { ethers } from "hardhat";
import { SwapERC20__factory } from "../typechain-types";

async function main() {
  const adminAddress = "0xF48C993dea34AFbe3e0Bb28b36A23675e28ec52a";
  const feeCollectingAddress = "0xF48C993dea34AFbe3e0Bb28b36A23675e28ec52a";

  const swap_factory = await ethers.getContractFactory("SwapFactory");
  const swapFactory = await swap_factory.deploy(adminAddress);

  await swapFactory.deployed();


  

  await swapFactory.setFeeTo(feeCollectingAddress);


  console.log(
    `admin address ${adminAddress
    } deployed to ${swapFactory.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
