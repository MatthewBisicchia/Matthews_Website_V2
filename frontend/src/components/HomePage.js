import React from 'react';
import styles from './styles/HomePage.module.css';
import matthew from './profilePicture/Matthew.png';
import Gallery from './Gallery.js';

const HomePage = () => {
  
    return(
        <React.Fragment>
            <div>
                <div id={styles.topSection}>
                    <div id={styles.profilePictureContainer}>
                        <img src={matthew} id={styles.profilePicture} />
                    </div>

                    <a href="https://matthewbisicchia.github.io/my-website2.0/#/about" className={styles.buttonText}><div id={styles.homePageButton}>About</div></a>
                    <a href="https://matthewbisicchia.github.io/my-website2.0/#/cooking" className={styles.buttonText}><div id={styles.homePageButton}>Cooking</div></a>
                </div>

                <div id={styles.galleryLabel}>
                    Gallery<br />(can scroll down, & click to enlarge a photo):
                </div>

                <Gallery/>
            </div>
        </React.Fragment>
    );
}

export default HomePage;