//https://eth-ropsten.alchemyapi.io/v2/SxLb_RfwX1afr5vdGYRwUbXseczVBbqB


require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url:'https://eth-ropsten.alchemyapi.io/v2/SxLb_RfwX1afr5vdGYRwUbXseczVBbqB',
      accounts: ['49548f4681e0bb09a562acc8d7e0452b8152d729d7670ca4571a86ad47c25ce4'],
    }
  }
}