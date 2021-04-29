import React, { useState } from 'react';
import Head from 'next/head'
import CaptionContainer from '../platform/caption/captionContainerComponent';
import ContainerButton from '../platform/button/buttonContainerComponent';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Share Code Between React Native and React JS
        </h1>

        <p className={styles.description}>
          Using container pattern
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
              <CaptionContainer refresh={refresh} setRefresh={setRefresh} />
              <ContainerButton setRefrsh={setRefresh} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        This is the Web Application
      </footer>
    </div>
  )
}