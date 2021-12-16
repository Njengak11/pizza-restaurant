import Image from 'next/image';
import React from 'react'
import styles from '../styles/Footer.module.css';


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/bg.png' layout='fill' alt=''/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        YEAH! COME AND ENJOY OUR PIZZAS
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        Westlands, Sports Road .
                        <br/>Nairobi
                        <br/>123-456789
                    </p>
                    <p className={styles.text}>
                        Westlands, Sports Road .
                        <br/>Mombasa
                        <br/>123-456789
                    </p>
                    <p className={styles.text}>
                        Westlands, Sports Road .
                        <br/>Kisumu
                        <br/>123-456789
                    </p>
                    <p className={styles.text}>
                        Westlands, Sports Road .
                        <br/>Nakuru
                        <br/>123-456789
                    </p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                    MON - FRI
                    <br/> 9:00 - 22:00
                </p>
                <p className={styles.text}>
                    SAT - SUN
                    <br/> 12:00 - 24:00
                </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
