const wrapProvider = require('arb-ethers-web3-bridge').wrapProvider
const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = "0xffb2b26161e081f0cdf9db67200ee0ce25499d5ee683180a9781e6cceb791c39"
const arbProviderUrl = 'http://localhost:8547/'

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            gas: 10000000,
        },
        arbitrum: {
            provider: function () {
              // return wrapped provider:
              return wrapProvider(
                new HDWalletProvider(mnemonic, arbProviderUrl)
              )
            },
            network_id: '*',
            gasPrice: 0,
          },
        coverage: {
            host: 'localhost',
            network_id: '*',
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.6.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: 'istanbul',
            },
        },
    },
};
