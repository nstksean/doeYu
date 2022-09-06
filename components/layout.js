import React from 'react';
import styles from './layout.module.css';

export default function Layout({ childern }) {
    return <div className={styles.container}>{childern}</div>;
}