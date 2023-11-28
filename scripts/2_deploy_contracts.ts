import { ethers } from "hardhat";

async function main() {
  const adminAddress = "0xF48C993dea34AFbe3e0Bb28b36A23675e28ec52a";
  const feeCollectingAddress = "0xF48C993dea34AFbe3e0Bb28b36A23675e28ec52a";

   const accounts = await ethers.getSigners();

  const dC = await ethers.getContractFactory("SwapFactory");
  const deployedC = await  dC.deploy(adminAddress);

  await deployedC.waitForDeployment();
  console.log(await deployedC.feeToSetter())

  console.log("Contract Deployment Hash: ",deployedC.deploymentTransaction()?.hash)
  

  const setFeeTX = await deployedC.connect(accounts[0]).setFeeTo(feeCollectingAddress);

  await setFeeTX.wait();

  


  console.log(
    `admin address ${adminAddress
    } deployed to ${deployedC.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
