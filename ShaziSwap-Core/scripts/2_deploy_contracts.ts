import { ethers } from "hardhat";
import hre from "hardhat";
import path from "path";
import fs from "fs";

const fac_deployment_path = path.join(__dirname,"../../ShaziSwap-Periphery/swapFactoryDeployments.json");



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

  try {
    await hre.run("verify:verify", {
      address: deployedC.target,
      contract: "contracts/SwapFactory.sol:SwapFactory",
      constructorArguments: [adminAddress],
    });

    console.log("Verified Successfully");
  } catch (error) {
    console.log("Verification Failed: ", error);
  }


  try {
    const contents = {
     
      deployedContract: deployedC.target,
    };

    console.log("Contents", contents);

    // Read the existing deployments file if it exists
    const existingContents = fs.existsSync(fac_deployment_path)
      ? JSON.parse(fs.readFileSync(fac_deployment_path, "utf8"))
      : [];

    // Append the new contents to the existing contents
    existingContents.push(contents);

    // Write the updated contents back to the file
    fs.writeFileSync(fac_deployment_path, JSON.stringify(existingContents, null, 2), "utf8");
  } catch (error) {}

  

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
