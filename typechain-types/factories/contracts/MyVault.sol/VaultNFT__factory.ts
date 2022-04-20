/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VaultNFT,
  VaultNFTInterface,
} from "../../../contracts/MyVault.sol/VaultNFT";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    constant: true,
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        name: "",
        type: "string",
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
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f6d694d41544943205661756c74000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4d5456000000000000000000000000000000000000000000000000000000008152508181620000986301ffc9a760e01b6200012960201b60201c565b620000b06380ac58cd60e01b6200012960201b60201c565b620000c863780e9d6360e01b6200012960201b60201c565b8151620000dd906009906020850190620001f8565b508051620000f390600a906020840190620001f8565b506200010c635b5e139f60e01b6200012960201b60201c565b5050600d80546001600160a01b03191633179055506200029d9050565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620001bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023b57805160ff19168380011785556200026b565b828001600101855582156200026b579182015b828111156200026b5782518255916020019190600101906200024e565b50620002799291506200027d565b5090565b6200029a91905b8082111562000279576000815560010162000284565b90565b611c4680620002ad6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c80634f6ccce7116100cd57806395d89b4111610081578063b88d4fde11610066578063b88d4fde1461044f578063c87b56dd14610515578063e985e9c5146105325761016c565b806395d89b4114610419578063a22cb465146104215761016c565b80636c0360eb116100b25780636c0360eb146103c5578063704b6c02146103cd57806370a08231146103f35761016c565b80634f6ccce71461038b5780636352211e146103a85761016c565b806323b872dd1161012457806340c10f191161010957806340c10f191461030c57806342842e0e1461033857806342966c681461036e5761016c565b806323b872dd146102aa5780632f745c59146102e05761016c565b8063081812fc11610155578063081812fc14610229578063095ea7b31461026257806318160ddd146102905761016c565b806301ffc9a71461017157806306fdde03146101ac575b600080fd5b6101986004803603602081101561018757600080fd5b50356001600160e01b031916610560565b604080519115158252519081900360200190f35b6101b4610583565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ee5781810151838201526020016101d6565b50505050905090810190601f16801561021b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102466004803603602081101561023f57600080fd5b503561061a565b604080516001600160a01b039092168252519081900360200190f35b61028e6004803603604081101561027857600080fd5b506001600160a01b038135169060200135610681565b005b6102986107ab565b60408051918252519081900360200190f35b61028e600480360360608110156102c057600080fd5b506001600160a01b038135811691602081013590911690604001356107b1565b610298600480360360408110156102f657600080fd5b506001600160a01b038135169060200135610812565b61028e6004803603604081101561032257600080fd5b506001600160a01b038135169060200135610894565b61028e6004803603606081101561034e57600080fd5b506001600160a01b038135811691602081013590911690604001356108ee565b61028e6004803603602081101561038457600080fd5b5035610909565b610298600480360360208110156103a157600080fd5b5035610961565b610246600480360360208110156103be57600080fd5b50356109cb565b6101b4610a2a565b61028e600480360360208110156103e357600080fd5b50356001600160a01b0316610a8b565b6102986004803603602081101561040957600080fd5b50356001600160a01b0316610ac4565b6101b4610b31565b61028e6004803603604081101561043757600080fd5b506001600160a01b0381351690602001351515610b92565b61028e6004803603608081101561046557600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156104a057600080fd5b8201836020820111156104b257600080fd5b803590602001918460018302840111640100000000831117156104d457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c94945050505050565b6101b46004803603602081101561052b57600080fd5b5035610cf7565b6101986004803603604081101561054857600080fd5b506001600160a01b0381358116916020013516610ec8565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561060f5780601f106105e45761010080835404028352916020019161060f565b820191906000526020600020905b8154815290600101906020018083116105f257829003601f168201915b505050505090505b90565b600061062582610ef6565b151561066557604051600160e51b62461bcd02815260040180806020018281038252602c815260200180611af7602c913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061068c826109cb565b90506001600160a01b0383811690821614156106dc57604051600160e51b62461bcd028152600401808060200182810382526021815260200180611b786021913960400191505060405180910390fd5b806001600160a01b03166106ee610f13565b6001600160a01b0316148061070f575061070f8161070a610f13565b610ec8565b151561074f57604051600160e51b62461bcd028152600401808060200182810382526038815260200180611a6c6038913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60075490565b6107c26107bc610f13565b82610f17565b151561080257604051600160e51b62461bcd028152600401808060200182810382526031815260200180611b996031913960400191505060405180910390fd5b61080d838383610fc0565b505050565b600061081d83610ac4565b821061085d57604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806119bb602b913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061088157fe5b9060005260206000200154905092915050565b600d546001600160a01b031633146108e057604051600160e51b62461bcd0281526004018080602001828103825260288152602001806119e66028913960400191505060405180910390fd5b6108ea8282611010565b5050565b61080d83838360405180602001604052806000815250610c94565b600d546001600160a01b0316331461095557604051600160e51b62461bcd028152600401808060200182810382526026815260200180611b526026913960400191505060405180910390fd5b61095e8161102d565b50565b600061096b6107ab565b82106109ab57604051600160e51b62461bcd02815260040180806020018281038252602c815260200180611bca602c913960400191505060405180910390fd5b60078054839081106109b957fe5b90600052602060002001549050919050565b6000818152600160205260408120546001600160a01b0316801515610a2457604051600160e51b62461bcd028152600401808060200182810382526029815260200180611ace6029913960400191505060405180910390fd5b92915050565b600b8054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561060f5780601f106105e45761010080835404028352916020019161060f565b600d546001600160a01b03163314610aa257600080fd5b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160a01b0382161515610b1057604051600160e51b62461bcd02815260040180806020018281038252602a815260200180611aa4602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610a249061103f565b600a8054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561060f5780601f106105e45761010080835404028352916020019161060f565b610b9a610f13565b6001600160a01b0383811691161415610bfd5760408051600160e51b62461bcd02815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060046000610c0a610f13565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610c4e610f13565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b610ca5610c9f610f13565b83610f17565b1515610ce557604051600160e51b62461bcd028152600401808060200182810382526031815260200180611b996031913960400191505060405180910390fd5b610cf184848484611043565b50505050565b6060610d0282610ef6565b1515610d4257604051600160e51b62461bcd02815260040180806020018281038252602f815260200180611b23602f913960400191505060405180910390fd5b6000828152600c602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610dd75780601f10610dac57610100808354040283529160200191610dd7565b820191906000526020600020905b815481529060010190602001808311610dba57829003601f168201915b50505050509050805160001415610dfe57505060408051602081019091526000815261057e565b600b816040516020018083805460018160011615610100020316600290048015610e5f5780601f10610e3d576101008083540402835291820191610e5f565b820191906000526020600020905b815481529060010190602001808311610e4b575b5050825160208401908083835b60208310610e8b5780518252601f199092019160209182019101610e6c565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061057e565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b3390565b6000610f2282610ef6565b1515610f6257604051600160e51b62461bcd02815260040180806020018281038252602c815260200180611a40602c913960400191505060405180910390fd5b6000610f6d836109cb565b9050806001600160a01b0316846001600160a01b03161480610fa85750836001600160a01b0316610f9d8461061a565b6001600160a01b0316145b80610fb85750610fb88185610ec8565b949350505050565b60408051600160e51b62461bcd02815260206004820152601260248201527f7472616e736665723a2064697361626c65640000000000000000000000000000604482015290519081900360640190fd5b61101a828261109a565b61102482826111d3565b6108ea81611211565b61095e611039826109cb565b82611255565b5490565b61104e848484610fc0565b61105a8484848461129d565b1515610cf157604051600160e51b62461bcd028152600401808060200182810382526032815260200180611a0e6032913960400191505060405180910390fd5b6001600160a01b03821615156110fa5760408051600160e51b62461bcd02815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61110381610ef6565b156111585760408051600160e51b62461bcd02815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b03871690811790915583526003909152902061119790611526565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b61125f828261152f565b6000818152600c602052604090205460026000196101006001841615020190911604156108ea576000818152600c602052604081206108ea91611938565b60006112b1846001600160a01b031661155b565b15156112bf57506001610fb8565b600060606001600160a01b0386167f150b7a02000000000000000000000000000000000000000000000000000000006112f6610f13565b89888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561136f578181015183820152602001611357565b50505050905090810190601f16801561139c5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106114195780518252601f1990920191602091820191016113fa565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461147b576040519150601f19603f3d011682016040523d82523d6000602084013e611480565b606091505b50915091508115156114d65780511561149c5780518082602001fd5b604051600160e51b62461bcd028152600401808060200182810382526032815260200180611a0e6032913960400191505060405180910390fd5b60008180602001905160208110156114ed57600080fd5b50516001600160e01b0319167f150b7a0200000000000000000000000000000000000000000000000000000000149350610fb892505050565b80546001019055565b6115398282611594565b611543828261166e565b6000818152600660205260408120556108ea81611765565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590610fb8575050151592915050565b816001600160a01b03166115a7826109cb565b6001600160a01b0316146115ef57604051600160e51b62461bcd028152600401808060200182810382526025815260200180611bf66025913960400191505060405180910390fd5b6115f881611803565b6001600160a01b03821660009081526003602052604090206116199061183e565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b03821660009081526005602052604081205461169890600163ffffffff61185516565b600083815260066020526040902054909150808214611735576001600160a01b03841660009081526005602052604081208054849081106116d557fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110151561171557fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b038416600090815260056020526040902080549061175e90600019830161197c565b5050505050565b60075460009061177c90600163ffffffff61185516565b6000838152600860205260408120546007805493945090928490811061179e57fe5b90600052602060002001549050806007838154811015156117bb57fe5b600091825260208083209091019290925582815260089091526040902082905560078054906117ee90600019830161197c565b50505060009182525060086020526040812055565b6000818152600260205260409020546001600160a01b03161561095e57600090815260026020526040902080546001600160a01b0319169055565b805461185190600163ffffffff61185516565b9055565b600061189783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061189e565b9392505050565b6000818484111561193057604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118f55781810151838201526020016118dd565b50505050905090810190601f1680156119225780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50805460018160011615610100020316600290046000825580601f1061195e575061095e565b601f01602090049060005260206000209081019061095e919061199c565b81548183558181111561080d5760008381526020902061080d9181019083015b61061791905b808211156119b657600081556001016119a2565b509056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e6473546f6b656e3a206163636f756e7420646f6573206e6f742068617665206d696e74657220726f6c654552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e546f6b656e3a206163636f756e7420646f6573206e6f742068617665206275726e20726f6c654552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734552433732313a206275726e206f6620746f6b656e2074686174206973206e6f74206f776ea165627a7a723058204b826f477e91bf9576c0473f3928e32d2953422f425f8617daa302f5d47444910029";

type VaultNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VaultNFT__factory extends ContractFactory {
  constructor(...args: VaultNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VaultNFT> {
    return super.deploy(overrides || {}) as Promise<VaultNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VaultNFT {
    return super.attach(address) as VaultNFT;
  }
  override connect(signer: Signer): VaultNFT__factory {
    return super.connect(signer) as VaultNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultNFTInterface {
    return new utils.Interface(_abi) as VaultNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VaultNFT {
    return new Contract(address, _abi, signerOrProvider) as VaultNFT;
  }
}
