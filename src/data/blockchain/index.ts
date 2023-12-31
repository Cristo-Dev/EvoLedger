import { AddressType, BlockchainConstantsType } from '@/data/blockchain/types';

export const BlockchainConstants: BlockchainConstantsType = {
  '5': {
    kyc: '0x3da1841dd7876f338dd8ef0fe75d9cc6fcc951cb' as AddressType,
    Manager: '0x9e9c2aC8Abcd77aFB89299a69f4e6aFF9F851296' as AddressType,
  },
  '5001': {
    kyc: '0x3dA1841DD7876f338dD8Ef0FE75D9CC6fcC951cb' as AddressType,
    Manager: '0x4D25183bf40038c4125187B78410921568d7F807' as AddressType,
  },
  '534351': {
    kyc: '0x3dA1841DD7876f338dD8Ef0FE75D9CC6fcC951cb' as AddressType,
    Manager: '0x638d49e65F7238c38181aE0C7f1df23c38Abf574' as AddressType,
  },
  '8217': {
    kyc: '0x75a01d6190605e0a263025ac8cbc8fd166893bb7' as AddressType,
    Manager: '0x209c2fbf65c1cc16599aa6ba8be957bf6cd897ff' as AddressType,
  },
};

export enum PropertyStatus {
  Pending,
  Shipped,
  Accepted,
  Rejected,
  Canceled,
}

export const StatusToText: Record<PropertyStatus, string> = {
  [PropertyStatus.Pending]: 'Pending for approve',
  [PropertyStatus.Shipped]: 'Shipped',
  [PropertyStatus.Accepted]: 'Accepted accepted!',
  [PropertyStatus.Rejected]: 'Rejected property',
  [PropertyStatus.Canceled]: 'Canceled property',
};

export const AddressZero = '0x0000000000000000000000000000000000000000';
