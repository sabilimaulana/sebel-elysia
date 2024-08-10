import { createPublicClient, http } from "viem"
import { optimismSepolia } from "viem/chains"

export const abi = [
  {
    type: "function",
    name: "getGreeter",
    inputs: [{ name: "greetId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGreetsCount",
    inputs: [{ name: "greeter", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getIds",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMessage",
    inputs: [{ name: "greetId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "greet",
    inputs: [{ name: "message", type: "string", internalType: "string" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "GreetCreated",
    inputs: [
      {
        name: "greetId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "greeter",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "message",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
] as const

export const chain = createPublicClient({
  chain: optimismSepolia,
  transport: http(),
})

export const address = "0xEAC0a81153557a7f49e05DAe461CF5660E6Af180"
