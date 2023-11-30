import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../../public/assets/logo.svg';
import ConnectionButton from '../ConnectionButton';

import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div>
        <Link href={'/'} className={styles.link}>
          <Image className={styles.header_image} src={Logo} alt={'Logo'} />
        </Link>
        <Link className={`${styles.market} ${styles.link}`} href={'market'}>
        Market
        </Link>
      </div>

      <div>
        <ConnectionButton />
      </div>
    </div>
  );
};

export default Header;
