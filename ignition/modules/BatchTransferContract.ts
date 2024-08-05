import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BatchTransferModule = buildModule("BatchTransferModule", (module) => {
  const batchTransferContract = module.contract("BatchTransferContract");
  const tokenContract = module.contract("Token", [1000000]);
  const batchContract = module.contract("BatchContract");

  return { batchTransferContract, tokenContract, batchContract };
});

export default BatchTransferModule;
