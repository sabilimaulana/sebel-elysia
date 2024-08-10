import { createWalletClient, http, publicActions } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { optimismSepolia } from "viem/chains"

const account = privateKeyToAccount(
  "0xdb2f90284ead0002e66ca125f642c4531518cc5cf060e0477f01e1f45fd56060"
)

const client = createWalletClient({
  account,
  chain: optimismSepolia,
  transport: http(),
}).extend(publicActions)

const address = "0xEAC0a81153557a7f49e05DAe461CF5660E6Af180"

const abi = [
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

const greet = async (message: string) => {
  const { request } = await client.simulateContract({
    address,
    abi,
    functionName: "greet",
    args: [message],
  })

  const hash = await client.writeContract(request)

  console.log(hash)
}

;(async () => {
  await greet("Halo mars")
  // const lala = await client.readContract({
  //   address,
  //   abi,
  //   functionName: "getIds",
  // });
  // console.log({ lala });
})()
