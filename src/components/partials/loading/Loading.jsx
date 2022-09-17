import React from 'react';
import styles from './loading.module.scss'
import { ImSpinner2 } from 'react-icons/im';

/**
 * Decorative component that represents loading.
 *
 * @return {React.ReactElement} The loading.
 */
const Loading = () => (
  <ImSpinner2 className={styles.loadingSpinner} />
)

export default Loading;
