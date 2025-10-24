import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Organization & Users Management App</h1>
      <p>
        This application allows you to manage organizations and users efficiently.
      </p>
      <div className={styles.links}>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;