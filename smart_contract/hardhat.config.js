require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/MzouNSSc5w_bVhaokRtfIq85zocm0D6a",
      accounts: ["PRIVATE_KEY"]
    },
  }
}