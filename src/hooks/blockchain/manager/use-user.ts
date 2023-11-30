import { useMemo } from 'react';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

import { BlockchainConstants, PropertyType } from '@/data';
import { ManagerAbi } from '@/data/abi/manager.abi';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUser = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { data: isVerifier } = useContractRead({
    abi: ManagerAbi,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    address: BlockchainConstants[String(chain?.id) || '5'].Manager,
    functionName: 'verifier',
    args: [address],
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { data: userProperties } = useContractRead({
    abi: ManagerAbi,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    address: BlockchainConstants[String(chain?.id) || '5'].Manager,
    functionName: 'userProperties',
    args: [address],
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const { data: verifierProperties } = useContractRead({
    abi: ManagerAbi,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    address: BlockchainConstants[String(chain?.id) || '5'].Manager,
    functionName: 'getAvailableVerifierProperties',
    account: address,
  });

  return useMemo(
    () => ({
      isVerifier,
      userProperties: userProperties as PropertyType[],
      verifierProperties: verifierProperties as PropertyType[],
    }),
    [userProperties, isVerifier],
  );
};
