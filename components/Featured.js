import React from 'react'
import Image from 'next/image';
import styles from '../styles/Featured.module.css';

function Featured() {

    
    return (
        <div className={styles.container}>
        <div className={styles.imgContainer}>
        <Image src="/img/pb.jpg" alt="" layout='fill' />
        </div>
        
        </div>
        
    )
}

export default Featured
