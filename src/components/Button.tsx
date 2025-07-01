import React, { type ButtonHTMLAttributes} from 'react';
import styles from '../styles/Button.module.scss';

const Button:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <div>
        <button className={styles.button} {...props} />;
    </div>
  );
};

export default Button;