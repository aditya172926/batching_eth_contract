// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BatchContract {
    
    function sendBatchTransactions(bytes[] calldata data, address[] calldata to, uint256[] calldata value) external payable {
        for (uint i=0; i<data.length; i++) {
            address payable receiver = payable(to[i]);
            (bool success, ) = receiver.call{value: value[i]}(data[i]);
            require(success, "Transaction failed");
        }
    }

    fallback() external {}
}