/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ExampleComputeLiquidityValue,
  ExampleComputeLiquidityValueInterface,
} from "../../../contracts/examples/ExampleComputeLiquidityValue";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityAmount",
        type: "uint256",
      },
    ],
    name: "getGasCostOfGetLiquidityValueAfterArbitrageToPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidityAmount",
        type: "uint256",
      },
    ],
    name: "getLiquidityValue",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityAmount",
        type: "uint256",
      },
    ],
    name: "getLiquidityValueAfterArbitrageToPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "truePriceTokenB",
        type: "uint256",
      },
    ],
    name: "getReservesAfterArbitrage",
    outputs: [
      {
        internalType: "uint256",
        name: "reserveA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveB",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516117473803806117478339818101604052602081101561003357600080fd5b81019080805190602001909291905050508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250505060805160601c61169a6100ad600039806102fd528061033a528061037c52806103be52806103e8525061169a6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633558e94c1461005c57806369a2fcbd146100ef57806380caa3531461018c578063c45a015514610222578063d9b7a6e71461026c575b600080fd5b6100d26004803603608081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506102f5565b604051808381526020018281526020019250505060405180910390f35b61016f600480360360a081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190505050610332565b604051808381526020018281526020019250505060405180910390f35b61020c600480360360a08110156101a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190505050610371565b6040518082815260200191505060405180910390f35b61022a6103bc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d86004803603606081101561028257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506103e0565b604051808381526020018281526020019250505060405180910390f35b6000806103257f00000000000000000000000000000000000000000000000000000000000000008787878761041b565b9150915094509492505050565b6000806103637f0000000000000000000000000000000000000000000000000000000000000000888888888861050c565b915091509550959350505050565b6000805a90506103a57f0000000000000000000000000000000000000000000000000000000000000000888888888861050c565b505060005a90508082039250505095945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008061040f7f0000000000000000000000000000000000000000000000000000000000000000868686610785565b91509150935093915050565b600080610429878787610995565b80925081935050506000821180156104415750600081115b610496576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806115c8602d913960400191505060405180910390fd5b6000806104a586868686610abe565b9150915060008114156104bf578383935093505050610502565b81156104e45760006104d2828686610bbe565b905081850194508084039350506104ff565b60006104f1828587610bbe565b905081840193508085039450505b50505b9550959350505050565b60008060008073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561056e57600080fd5b505afa158015610582573d6000803e3d6000fd5b505050506040513d602081101561059857600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415905060006105d08a8a8a610cee565b90506000826105e0576000610662565b8173ffffffffffffffffffffffffffffffffffffffff16637464fc3d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561062657600080fd5b505afa15801561063a573d6000803e3d6000fd5b505050506040513d602081101561065057600080fd5b81019080805190602001909291905050505b905060008273ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ac57600080fd5b505afa1580156106c0573d6000803e3d6000fd5b505050506040513d60208110156106d657600080fd5b810190808051906020019092919050505090508681101580156106f95750600087115b61074e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061163e6027913960400191505060405180910390fd5b60008061075e8e8e8e8e8e61041b565b915091506107708282858c8a89610e49565b97509750505050505050965096945050505050565b600080600080610796888888610995565b9150915060006107a7898989610cee565b905060008073ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561080857600080fd5b505afa15801561081c573d6000803e3d6000fd5b505050506040513d602081101561083257600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415905060008161086b5760006108ed565b8273ffffffffffffffffffffffffffffffffffffffff16637464fc3d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b157600080fd5b505afa1580156108c5573d6000803e3d6000fd5b505050506040513d60208110156108db57600080fd5b81019080805190602001909291905050505b905060008373ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561093757600080fd5b505afa15801561094b573d6000803e3d6000fd5b505050506040513d602081101561096157600080fd5b810190808051906020019092919050505090506109828686838c8787610e49565b9750975050505050505094509492505050565b60008060006109a48585610f4b565b5090506000806109b5888888610cee565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156109fa57600080fd5b505afa158015610a0e573d6000803e3d6000fd5b505050506040513d6060811015610a2457600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614610aa8578082610aab565b81815b8095508196505050505050935093915050565b60008085610acd8587866110df565b1091506000610ae584866111bf90919063ffffffff16565b90506000610b3c610b37610b046103e8856111bf90919063ffffffff16565b86610b0f5789610b11565b8a5b610b326103e589610b22578d610b24565b8c5b6111bf90919063ffffffff16565b6110df565b611254565b905060006103e585610b6257610b5d6103e8886111bf90919063ffffffff16565b610b78565b610b776103e8896111bf90919063ffffffff16565b5b81610b7f57fe5b04905080821015610b9c5760008080905094509450505050610bb5565b610baf81836113d190919063ffffffff16565b93505050505b94509492505050565b6000808411610c18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806116186026913960400191505060405180910390fd5b600083118015610c285750600082115b610c7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806115f56023913960400191505060405180910390fd5b6000610c946103e5866111bf90919063ffffffff16565b90506000610cab84836111bf90919063ffffffff16565b90506000610cd683610cc86103e8896111bf90919063ffffffff16565b61145490919063ffffffff16565b9050808281610ce157fe5b0493505050509392505050565b6000806000610cfd8585610f4b565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807faf88dd15a55596feb9d67243c727bfd6144af12453963809bc91f0cfcf8241bc815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b600080838015610e595750600083115b15610f04576000610e7b610e76898b6111bf90919063ffffffff16565b611254565b90506000610e8885611254565b905080821115610f015760008890506000610eac83856113d190919063ffffffff16565b90506000610ed684610ec86005886111bf90919063ffffffff16565b61145490919063ffffffff16565b90506000610ee58484846110df565b9050610efa818d61145490919063ffffffff16565b9b50505050505b50505b85610f18868a6111bf90919063ffffffff16565b81610f1f57fe5b0486610f34878a6111bf90919063ffffffff16565b81610f3b57fe5b0491509150965096945050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610ff0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f537761704c6962726172793a204944454e544943414c5f41444452455353455381525060200191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161061102a57828461102d565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f537761704c6962726172793a205a45524f5f414444524553530000000000000081525060200191505060405180910390fd5b9250929050565b60008060006110ee86866114d7565b91509150600084806110fc57fe5b868809905082811115611110576001820391505b808303925060008214156111325784838161112757fe5b0493505050506111b8565b8482106111a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f46756c6c4d6174683a2046554c4c4449565f4f564552464c4f5700000000000081525060200191505060405180910390fd5b6111b283838761152a565b93505050505b9392505050565b6000808214806111dc57508282838502925082816111d957fe5b04145b61124e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008082141561126757600090506113cc565b6000829050600060019050700100000000000000000000000000000000821061129957608082901c9150604081901b90505b6801000000000000000082106112b857604082901c9150602081901b90505b64010000000082106112d357602082901c9150601081901b90505b6201000082106112ec57601082901c9150600881901b90505b610100821061130457600882901c9150600481901b90505b6010821061131b57600482901c9150600281901b90505b6008821061132b57600181901b90505b600181858161133657fe5b048201901c9050600181858161134857fe5b048201901c9050600181858161135a57fe5b048201901c9050600181858161136c57fe5b048201901c9050600181858161137e57fe5b048201901c9050600181858161139057fe5b048201901c905060018185816113a257fe5b048201901c905060008185816113b457fe5b0490508082106113c457806113c6565b815b93505050505b919050565b600082828403915081111561144e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b60008282840191508110156114d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8061150457fe5b84860990508385029250828103915082811015611522576001820391505b509250929050565b600080826000038316905080838161153e57fe5b04925080858161154a57fe5b049450600181826000038161155b57fe5b0401840285019450600060019050808402600203810290508084026002038102905080840260020381029050808402600203810290508084026002038102905080840260020381029050808402600203810290508084026002038102905080860292505050939250505056fe556e697377617056324172626974726167654c6962726172793a205a45524f5f504149525f5245534552564553537761704c6962726172793a20494e53554646494349454e545f4c4951554944495459537761704c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54436f6d707574654c697175696469747956616c75653a204c49515549444954595f414d4f554e54a264697066735822122053f18297ef81d625de154fee423bc728242daff397b271ce86e27a1f3eb8abe964736f6c63430006060033";

type ExampleComputeLiquidityValueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleComputeLiquidityValueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleComputeLiquidityValue__factory extends ContractFactory {
  constructor(...args: ExampleComputeLiquidityValueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    factory_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(factory_, overrides || {});
  }
  override deploy(
    factory_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(factory_, overrides || {}) as Promise<
      ExampleComputeLiquidityValue & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ExampleComputeLiquidityValue__factory {
    return super.connect(runner) as ExampleComputeLiquidityValue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleComputeLiquidityValueInterface {
    return new Interface(_abi) as ExampleComputeLiquidityValueInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExampleComputeLiquidityValue {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ExampleComputeLiquidityValue;
  }
}
