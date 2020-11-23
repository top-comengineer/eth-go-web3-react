async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Teste 123");

  console.log("Greeter address:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//npx hardhat run scripts/deploy.js --network rinkeby
//0xa4cC4C8d8f6bAeEEE6284326292B5314bDe8FF55
//npx hardhat verify --network rinkeby 0xa4cC4C8d8f6bAeEEE6284326292B5314bDe8FF55 "Teste 123"
