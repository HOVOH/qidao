/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  PriceSource,
  PriceSourceInterface,
} from "../../contracts/PriceSource";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class PriceSource__factory {
  static readonly abi = _abi;
  static createInterface(): PriceSourceInterface {
    return new utils.Interface(_abi) as PriceSourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceSource {
    return new Contract(address, _abi, signerOrProvider) as PriceSource;
  }
}
