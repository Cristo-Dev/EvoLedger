import { PropertyStatus } from '@/data';

export type AddressType = `0x${string}`;

export type BlockchainConstantsType = {
  5: {
    kyc: AddressType;
    Manager: AddressType;
  };
  5001: {
    kyc: AddressType;
    Manager: AddressType;
  };
  '534351': {
    kyc: AddressType;
    Manager: AddressType;
  };
  8217: {
    kyc: AddressType;
    Manager: AddressType;
  };
};

export type PropertyType = {
  id: number;
  name: string;
  docs: string;
  symbol: string;
  owner: AddressType;
  status: PropertyStatus;
  collectionAddress: AddressType;
  verifier: AddressType;
};
