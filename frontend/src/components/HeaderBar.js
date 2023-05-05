import React from 'react';
import styles from './styles/HeaderBar.module.css';

const HeaderBar = () => {
    return(
        <>
            <header id={styles.header}>
                <div style={{color:'gold'}}><a href="http://matthew-bisicchia.com/home" id={styles.siteName}>matthewbisicchia.com</a></div>
            </header>
        </>
    );
}

export default HeaderBar;
