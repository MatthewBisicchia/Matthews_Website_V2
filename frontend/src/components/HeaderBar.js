import React from 'react';
import styles from './styles/HeaderBar.module.css';

const HeaderBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}><a href="https://matthewbisicchia.github.io/my-website2.0/" id={styles.siteName}>matthewbisicchia.com</a></div>
            </header>
        </>
    );
}

export default HeaderBar;
