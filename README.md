

## EvoLedge - The Klaytn RWA Factory

### Vision

The current bottleneck for RWAs on Klaytn lies in discovering which markets and assets are ready to move on-chain. To help this discovery, we simplified the RWA tokenization process, and thus give users and developers a template marketplace for RWAs on Klaytn - decentralized and generalized for any RWA.

### Our BUIDL

Our project simplifies the way real-world assets (RWAs) are tokenized and traded, leveraging smart contracts on the Klaytn blockchain. At the heart of our project is a vision to streamline the transition of various markets onto the blockchain, identifying and targeting those with the greatest potential for digital transformation.

Our platform’s business logic runs completely on solidity smart contracts, and users interact with it through a Next.js UI. We aimed to make our platform easily forkable, and thus used a modern tech stack that easily integrates with the most used frameworks and APIs.

Our users are empowered to create collections of their real-world assets, which are then verified and priced by trusted verifiers - similar to local real estate markets. These assets are tokenized into tradable units, fostering a new marketplace where tokens can be traded, listed, and even used to form Decentralized Autonomous Organizations (DAOs) around the assets.

Our project is more than just a marketplace; it's a template and a stepping stone towards the larger goal of bringing the vast world of Real-World Assets onto the blockchain, making their trade more accessible, secure, and transparent. We envision a future where the exchange of Real-World Assets is as seamless and straightforward as trading digital assets today.


**Private keys:**

Private key for admin (used in .env for KYC manager) 
- ``

Private key for verifier (used in metamask for verifiers transactions approve)
- ``

**Created with:**

- [`LiteFront`](https://github.com/uxname/litefront)
- [`RainbowKit`](https://www.rainbowkit.com/)
- [`wagmi`](https://wagmi.sh/)
- [`viem`](https://viem.sh/)

# Get started
- `npm install`
-  `cp .env_example .env`
- Edit `.env`
- `npm run dev`

**Production build:**
- `npm run build`
- `npm start`

# Contracts

**Klatyn**

| Name | Address |
| -------- | ------- |
| Kyc Store Contract | [0x75a01d6190605e0a263025ac8cbc8fd166893bb7] |
| Property Example Contract | [0x00d8736db0f4e86898ec446240957157af84c34e] |
| Manager Contract | [0x209c2fbf65c1cc16599aa6ba8be957bf6cd897ff] |

---------------------------------- 




