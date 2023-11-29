import { FC } from 'react';

import styles from './styles.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      {``} &#xa9; {`${new Date().getFullYear()} EvoLedger`}
    </div>
  );
};

export default Footer;
