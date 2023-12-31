import type { NextApiRequest, NextApiResponse } from 'next';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import {
  goerli,
  klaytn,
  mantleTestnet,
  scrollSepolia,
} from 'viem/chains';

import { AddressType, BlockchainConstants, KycManagerAbi } from '@/data';

type ResponseData = {
  message: string;
};

const chainsMap = {
  '5': goerli,
  '5001': mantleTestnet,
  '534351': scrollSepolia,
  '8217': klaytn,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler(
  request: NextApiRequest,
  // eslint-disable-next-line unicorn/prevent-abbreviations
  res: NextApiResponse<ResponseData>,
) {
  const { body } = request;
  const {
    address,
    chain,
  }: { address: string; chain: '5' | '5001' | '534351' | '8217' } =
    JSON.parse(body);

  console.log(body);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const publicClient = createPublicClient({
    chain: chainsMap[chain],
    transport: http(),
  });

  const account = privateKeyToAccount(
    process.env.NEXT_PUBLIC_ADMIN_PRIVATE_KEY as AddressType,
  );

  const isKycPassed = await publicClient.readContract({
    // eslint-disable-next-line security/detect-object-injection
    address: BlockchainConstants[chain].kyc,
    abi: KycManagerAbi,
    functionName: 'addressToKycState',
    args: [address],
  });

  console.log('isKycPassed', isKycPassed);
  console.log('args', {
    address: BlockchainConstants[chain].kyc,
    abi: KycManagerAbi,
    functionName: 'addressToKycState',
    args: [address],
  });

  if (isKycPassed) {
    console.log('asdasdsadsda');
    res.status(200).json({ message: 'Kyc already passed!' });
    return;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _publicClient = createWalletClient({
    chain: chainsMap[chain],
    transport: http(),
  });

  await _publicClient.writeContract({
    // eslint-disable-next-line security/detect-object-injection
    address: BlockchainConstants[chain].kyc,
    abi: KycManagerAbi,
    functionName: 'setKycStatus',
    account,
    args: [address, true],
  });

  res.status(200).json({ message: 'Kyc successfully passed!' });
}
