# Token Batch SDK Contracts

This repository contains the Smart Contracts used for Batch transactions in [Token Batch SDK](https://github.com/aditya172926/token_batch_sdk)

## Contracts

### BatchTransferContract
This smart contract contains the functions facilitating the transactions of ETH transfers and ERC20 token transfers in batches.

#### ETH transfer batch function
batchTransfer

#### ERC20 transfer batch function
batchTransferMultiTokens

### BatchContract
This smart contract provides a layer over the BatchTransferContract. It allows the SDK to execute all batches of transaction in a single transaction. For instance to send ETH and ERC20 tokens to multiple recipients in batches, you will not have to do multiple transactions for each batch. Instead you will execute only 1 transaction for processing all batches.

## Transaction
The smart contracts are deployed on Ethereum sepolia testnet.

Find the executed batch transaction response on this [link](https://sepolia.etherscan.io/tx/0x3261f5b18bfb3c7e47b6614b793e8d39fc0d027586ef7139623659e6188c50f9)

- BatchTransferContract Address - 0x7FD154df41ec41336A86Ee53a3F7Fe886E80Efc7
- BatchContract Address - 0xb8cBB6a9965A851Dcb88Bb1734231c531a0bcdF1

## Contracts are verified on Blockscout
- [BatchContract.sol](https://optimism-sepolia.blockscout.com/address/0x909e24D7e79F45937705e8A8899aa52255bB3E1F#code)
- [BatchTransferContract](https://optimism-sepolia.blockscout.com/address/0xd7aeb1fCACBC7fc2C34A27d71B61DbBe043aC97E#code)
- [Token Contract](https://optimism-sepolia.blockscout.com/address/0xb65aA0c58B7F0Cd8D07fba21A2daDC8667326629#code)

## Credits
The BatchTransferContract is an extension of this opensource [repository](https://github.com/divyalalwani/Batch-Contract)