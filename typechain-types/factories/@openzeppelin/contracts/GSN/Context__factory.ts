/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  Context,
  ContextInterface,
} from "../../../../@openzeppelin/contracts/GSN/Context";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export class Context__factory {
  static readonly abi = _abi;
  static createInterface(): ContextInterface {
    return new utils.Interface(_abi) as ContextInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Context {
    return new Contract(address, _abi, signerOrProvider) as Context;
  }
}
