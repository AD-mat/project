const hre=require('hardhat');
async function main() {
    const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory")
    const campaignFactory = await CampaignFactory.deploy();
    await CampaignFactory.deploy();
    console.log("Factory deployed to:",campaignFactory.address);}
main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });