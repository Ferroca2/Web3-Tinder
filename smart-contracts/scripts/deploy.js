const {ethers} = require('hardhat');

const main = async() => {
    const tinderFactory = await ethers.getContractFactory('TinderERC721')
    const TinderContract = await tinderFactory.deploy()

    console.log('Tinder contract address: ', TinderContract.address)
}

main().then(() => process.exit(0)).catch(error => {
    console.log('error in deployment >> ', error)
    process.exit(1)
})