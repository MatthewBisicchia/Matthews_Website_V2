import React from 'react';
import styles from './styles/AboutPage.module.css';
import resumePDF from '../assets/Matthew_Bisicchia_Resume.pdf';
import BackBar from './BackBar.js';

const AboutPage = () => {
  
    return(
        <React.Fragment>

            <BackBar />
            <div id={styles.about}>
               About
            </div>

            {/* <img src={matthew} id={styles.picture} /> */}

            <div style={{ fontSize: '15px', fontFamily: 'Segoe UI', margin: '20px', fontWeight: 'bold', textAlign: 'center' }}> Click <a className={styles.link} href={resumePDF} without rel="noopener noreferrer" target="_blank"> here </a> to view my Resume.</div>

            <div className={styles.writing}>

                <p>
                    Hello! My name is Matthew Bisicchia. I am an engineer, tech enthusiast, son, grandson, and friend. I graduated from Rowan Univeristy in Glassboro, NJ, in May of 2022, with a major
                    in Electrical and Computer Engineering and a minor in Computer Science. Feel free to check out my resume.
                </p> 

                <p>
                    Currently, I work as a Software Engineer at <a href='https://impulse-dynamics.com/'>Impulse Dynamics</a>, a medical device startup. I enjoy computer programming and building software applications, and also enjoy electronics engineering.
                    I actively plan on working more in the hardware side as well. For software engineering, I have experience with tools/services such as
                    AWS, Docker, Node.js, React.js, Redux, Javascript and Typescript, Java, C++, and HTML/CSS, to name a few. I am always open to learning new languages and tools. 
                </p>
                
                <p>
                    I programmed this website with React.js, and hosting it with a simple Node application.
                </p>

                <p>
                    In my free time, I like being outside, walking, exercising/going to the gym, biking, playing piano, and spending time with family and friends. I love to cook (feel free to check out the Cooking tab of this site!).
                    
                    And I have a love/hate (these days, mostly hate) relationship with yardwork/yard maintenance. 
                </p>
                <p>
                    I also enjoy DIY projects. In 2017, my grandfather and I installed hardwood floors in our house, and we also installed 
                    trim/millwork throughout. I am so grateful for everything he has taught me!
                </p>
                {/* <p>
                    I listen to pretty much all genres of music, and enjoy discovering new artists when I let Spotify just play randomly.
                </p> */}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </React.Fragment>
    );
}

export default AboutPage;