/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShareOracle,
  ShareOracleInterface,
} from "../../../contracts/oracles/ShareOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceSource",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_shares",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "price",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    name: "FallbackPrice",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "fallbackPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
  {
    constant: true,
    inputs: [],
    name: "priceSource",
    outputs: [
      {
        internalType: "contract PriceSource",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "shares",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "updateFallbackPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107ad3803806107ad8339818101604052606081101561003357600080fd5b5080516020820151604090920151600080546001600160a01b039384166001600160a01b031991821617909155600180549484169482169490941790935560028054929091169190921617905561071e8061008f6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639816f4731161005b5780639816f473146100b6578063e28a1b86146100d7578063edd94813146100f1578063feaf968c146100fb5761007d565b806303314efa1461008257806320531bc9146100a65780636f307dc3146100ae575b600080fd5b61008a610142565b604080516001600160a01b039092168252519081900360200190f35b61008a610151565b61008a610160565b6100be61016f565b6040805192835260208301919091528051918290030190f35b6100df610280565b60408051918252519081900360200190f35b6100f9610286565b005b61010361039b565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6002546001600160a01b031681565b6000546001600160a01b031681565b6001546001600160a01b031681565b600154600254604080516370a0823160e01b81526001600160a01b0392831660048201529051600093849316916370a08231916024808301926020929190829003018186803b1580156101c157600080fd5b505afa1580156101d5573d6000803e3d6000fd5b505050506040513d60208110156101eb57600080fd5b5051600254604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b15801561024b57600080fd5b505afa15801561025f573d6000803e3d6000fd5b505050506040513d602081101561027557600080fd5b505190925090509091565b60035481565b60008060008060008060009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156102db57600080fd5b505afa1580156102ef573d6000803e3d6000fd5b505050506040513d60a081101561030557600080fd5b5080516020820151604083015160608401516080909401519298509096509450909250905060008413156103945760038490556040805169ffffffffffffffffffff808816825260208201879052818301869052606082018590528316608082015290517f03a09faeabece4ce494600d50d9b94cc312d34dbeda610a0aa20e33656d30d729181900360a00190a15b5050505050565b6000806000806000806000806000806000809054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156103f757600080fd5b505afa15801561040b573d6000803e3d6000fd5b505050506040513d60a081101561042157600080fd5b5080516020820151604083015160608401516080909401519298509096509450909250905060008085131561045757508361045c565b506003545b6000610572600260009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104af57600080fd5b505afa1580156104c3573d6000803e3d6000fd5b505050506040513d60208110156104d957600080fd5b5051600154600254604080516370a0823160e01b81526001600160a01b039283166004820152905161056693889316916370a08231916024808301926020929190829003018186803b15801561052e57600080fd5b505afa158015610542573d6000803e3d6000fd5b505050506040513d602081101561055857600080fd5b50519063ffffffff61058716565b9063ffffffff6105e916565b969c969b509399509197509550929350505050565b600082610596575060006105e3565b828202828482816105a357fe5b04146105e05760405162461bcd60e51b81526004018080602001828103825260218152602001806106c96021913960400191505060405180910390fd5b90505b92915050565b60006105e083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836106b25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561067757818101518382015260200161065f565b50505050905090810190601f1680156106a45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816106be57fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a265627a7a72315820aa5be6e5aabf05094804dbcf611c29d6be5f2567a0668b01cd54365ef145b2a764736f6c63430005100032";

type ShareOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShareOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShareOracle__factory extends ContractFactory {
  constructor(...args: ShareOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _priceSource: string,
    _underlying: string,
    _shares: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShareOracle> {
    return super.deploy(
      _priceSource,
      _underlying,
      _shares,
      overrides || {}
    ) as Promise<ShareOracle>;
  }
  override getDeployTransaction(
    _priceSource: string,
    _underlying: string,
    _shares: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _priceSource,
      _underlying,
      _shares,
      overrides || {}
    );
  }
  override attach(address: string): ShareOracle {
    return super.attach(address) as ShareOracle;
  }
  override connect(signer: Signer): ShareOracle__factory {
    return super.connect(signer) as ShareOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShareOracleInterface {
    return new utils.Interface(_abi) as ShareOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShareOracle {
    return new Contract(address, _abi, signerOrProvider) as ShareOracle;
  }
}
