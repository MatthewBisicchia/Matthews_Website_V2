import React from 'react';
import styles from './styles/CookingPage.module.css';

import BackBar from './BackBar.js';

import image1 from '../images_food/IMG_2083.JPG';
import image2 from '../images_food/IMG_3566.PNG';
import mashedPotatoes from '../images_food/IMG_3563.PNG';
import cod from '../images_food/IMG_3575.PNG';
import sauceAndAsparagus from '../images_food/IMG_3576.PNG';
import makingDough from '../images_food/IMG-3670.PNG';
import restingDough from '../images_food/IMG-3668.PNG';
import makingPizza from '../images_food/IMG-3777.PNG';
import cookingPizza from '../images_food/IMG-3673.PNG';
import chickenAndSpinachStrudels from '../images_food/IMG_3598.PNG';
import porkCarnitas from '../images_food/IMG_3569.PNG';
import lentilSoup from '../images_food/IMG_3562.PNG';

const CookingPage = () => {
    return(
        <React.Fragment>
            <BackBar />
            
            <div id={styles.cooking}>
               Cooking
            </div>

            {/* <img src={matthew} id={styles.picture} /> */}

            <p style={{ fontSize: '15px', fontFamily: 'Segoe UI', margin: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                Scroll down for some dishes that I have cooked!
            </p>

            <div className={styles.foods}>

                <p>
                    Vegetable Strudel (credit to <a href='https://www.youtube.com/watch?v=R9ZJPj4XH5A'> Akis Petretzikis</a>):
                </p>
                <img src={image1} className={styles.image} />
                <img src={image2} className={styles.image} />

                <p>
                    Homemade Mashed Potatoes from scratch:
                </p>
                <img src={mashedPotatoes} className={styles.image} />

                <p>
                    Baked cod with Parsley and Gluten Free Bread Crumbs, with drizzle of 'Pink Sauce' (Red Wine Cream Sauce) and side of Asparagus:
                </p>
                <img src={cod} className={styles.image} />
                <img src={sauceAndAsparagus} className={styles.image} />

                <p>
                    Chicken and Spinach Strudels:
                </p>
                <img src={chickenAndSpinachStrudels} className={styles.image} />

                <p>
                    Pizza with Homemade Dough (very fun to make, like when playing with sand at beach as a kid):
                </p>
                <img src={makingDough} className={styles.image} />
                <img src={restingDough} className={styles.image} />
                <img src={makingPizza} className={styles.image} />
                <img src={cookingPizza} className={styles.image} />

                <p>
                    Pork Carnitas:
                </p>
                <img src={porkCarnitas} className={styles.image} />

                <p>
                    Lentil Soup:
                </p>
                <img src={lentilSoup} className={styles.image} />

            </div>
        </React.Fragment>
    );
}

export default CookingPage;