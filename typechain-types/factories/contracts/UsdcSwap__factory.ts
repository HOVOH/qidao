/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UsdcSwap, UsdcSwapInterface } from "../../contracts/UsdcSwap";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "token",
        type: "address",
      },
      {
        name: "amountToken",
        type: "uint256",
      },
    ],
    name: "transferToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swapTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "usdcRate",
    outputs: [
      {
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
    name: "mimaticRate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setUSDCRatePerMimatic",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "swapFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "setMimaticRatePerUSDC",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_usdc",
        type: "address",
      },
      {
        name: "_mimatic",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051604080610f5b8339810180604052604081101561003057600080fd5b50805160209091015160008054600160ff199091168117610100600160a81b031916610100330217825580546001600160a01b03199081166001600160a01b0395861617909155600280549091169390921692909217905560626004556066600355610eb99081906100a290396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063704b6c021161007657806393516c561161005b57806393516c5614610194578063e451e9ba146101b1578063f851a440146101ce576100be565b8063704b6c021461015157806391c5420314610177576100be565b80632793b707116100a75780632793b70714610112578063356397d21461012f5780634fbd151a14610149576100be565b80630902f1ac146100c35780631072cbea146100e4575b600080fd5b6100cb6101f2565b6040805192835260208301919091528051918290030190f35b610110600480360360408110156100fa57600080fd5b506001600160a01b0381351690602001356102f4565b005b6101106004803603602081101561012857600080fd5b5035610400565b6101376107ac565b60408051918252519081900360200190f35b6101376107b2565b6101106004803603602081101561016757600080fd5b50356001600160a01b03166107b8565b6101106004803603602081101561018d57600080fd5b503561085e565b610110600480360360208110156101aa57600080fd5b50356108ca565b610110600480360360208110156101c757600080fd5b5035610c2c565b6101d6610c98565b604080516001600160a01b039092168252519081900360200190f35b60025460408051600160e01b6370a08231028152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561024557600080fd5b505afa158015610259573d6000803e3d6000fd5b505050506040513d602081101561026f57600080fd5b505160015460408051600160e01b6370a0823102815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156102bf57600080fd5b505afa1580156102d3573d6000803e3d6000fd5b505050506040513d60208110156102e957600080fd5b505190925090509091565b60005461010090046001600160a01b0316331461035b5760408051600160e51b62461bcd02815260206004820152600f60248201527f73657220706c73206e6f206861636b0000000000000000000000000000000000604482015290519081900360640190fd5b60008054604080517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b03610100909304831660048201526024810185905290519185169263a9059cbb926044808401936020939083900390910190829087803b1580156103d057600080fd5b505af11580156103e4573d6000803e3d6000fd5b505050506040513d60208110156103fa57600080fd5b50505050565b60005460ff16151561045c5760408051600160e51b62461bcd02815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6000805460ff191690558015156104bd5760408051600160e51b62461bcd02815260206004820152601660248201527f73776170546f3a20696e76616c696420616d6f756e7400000000000000000000604482015290519081900360640190fd5b60015460408051600160e01b6370a0823102815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561050b57600080fd5b505afa15801561051f573d6000803e3d6000fd5b505050506040513d602081101561053557600080fd5b5051151561057757604051600160e51b62461bcd028152600401808060200182810382526023815260200180610dfc6023913960400191505060405180910390fd5b60006105a4655af3107a400061059860045485610cac90919063ffffffff16565b9063ffffffff610d1516565b60015460408051600160e01b6370a08231028152306004820152905192935083926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156105f757600080fd5b505afa15801561060b573d6000803e3d6000fd5b505050506040513d602081101561062157600080fd5b5051101561066357604051600160e51b62461bcd028152600401808060200182810382526026815260200180610e476026913960400191505060405180910390fd5b600254604080517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b1580156106d657600080fd5b505af11580156106ea573d6000803e3d6000fd5b505050506040513d602081101561070057600080fd5b5050600154604080517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810184905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561076f57600080fd5b505af1158015610783573d6000803e3d6000fd5b505050506040513d602081101561079957600080fd5b50506000805460ff191660011790555050565b60035481565b60045481565b60005461010090046001600160a01b0316331461081f5760408051600160e51b62461bcd02815260206004820152600f60248201527f73657220706c73206e6f206861636b0000000000000000000000000000000000604482015290519081900360640190fd5b600080546001600160a01b03909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60005461010090046001600160a01b031633146108c55760408051600160e51b62461bcd02815260206004820152600f60248201527f73657220706c73206e6f206861636b0000000000000000000000000000000000604482015290519081900360640190fd5b600355565b60005460ff1615156109265760408051600160e51b62461bcd02815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6000805460ff191690558015156109875760408051600160e51b62461bcd02815260206004820152601860248201527f7377617046726f6d3a20696e76616c696420616d6f756e740000000000000000604482015290519081900360640190fd5b60025460408051600160e01b6370a0823102815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156109d557600080fd5b505afa1580156109e9573d6000803e3d6000fd5b505050506040513d60208110156109ff57600080fd5b50511515610a4157604051600160e51b62461bcd028152600401808060200182810382526028815260200180610e1f6028913960400191505060405180910390fd5b600354600090610a619061059884655af3107a400063ffffffff610cac16565b60025460408051600160e01b6370a08231028152306004820152905192935083926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610ab457600080fd5b505afa158015610ac8573d6000803e3d6000fd5b505050506040513d6020811015610ade57600080fd5b50511015610b2057604051600160e51b62461bcd028152600401808060200182810382526028815260200180610e1f6028913960400191505060405180910390fd5b600154604080517f23b872dd0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810185905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b158015610b9357600080fd5b505af1158015610ba7573d6000803e3d6000fd5b505050506040513d6020811015610bbd57600080fd5b5050600254604080517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810184905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561076f57600080fd5b60005461010090046001600160a01b03163314610c935760408051600160e51b62461bcd02815260206004820152600f60248201527f73657220706c73206e6f206861636b0000000000000000000000000000000000604482015290519081900360640190fd5b600455565b60005461010090046001600160a01b031681565b6000821515610cbd57506000610d0f565b828202828482811515610ccc57fe5b0414610d0c57604051600160e51b62461bcd028152600401808060200182810382526021815260200180610e6d6021913960400191505060405180910390fd5b90505b92915050565b6000610d0c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081831515610de357604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610da8578181015183820152602001610d90565b50505050905090810190601f168015610dd55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385811515610df157fe5b049594505050505056fe73776170546f3a204e6f7420656e6f756768205553444320696e2072657365727665737377617046726f6d3a204e6f7420656e6f756768206d694d6174696320696e20726573657276657373776170546f3a204e6f7420656e6f756768206d694d6174696320696e207265736572766573536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a7230582087517e1a86969868bc9591a640c379de4ab255f60a181561dfc700b833024d7c0029";

type UsdcSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdcSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UsdcSwap__factory extends ContractFactory {
  constructor(...args: UsdcSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdc: string,
    _mimatic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UsdcSwap> {
    return super.deploy(_usdc, _mimatic, overrides || {}) as Promise<UsdcSwap>;
  }
  override getDeployTransaction(
    _usdc: string,
    _mimatic: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usdc, _mimatic, overrides || {});
  }
  override attach(address: string): UsdcSwap {
    return super.attach(address) as UsdcSwap;
  }
  override connect(signer: Signer): UsdcSwap__factory {
    return super.connect(signer) as UsdcSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdcSwapInterface {
    return new utils.Interface(_abi) as UsdcSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdcSwap {
    return new Contract(address, _abi, signerOrProvider) as UsdcSwap;
  }
}
