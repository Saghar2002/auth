import React, { type InputHTMLAttributes} from 'react';
import styles from '../styles/Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
 error?: string;
}

const Input:React.FC<InputProps> = ({error, ...props}) => {
  return (
    <div className={styles.inputWrapper}>
    <input className={styles.input} {...props} />
    {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;