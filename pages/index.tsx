import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cutiehack 2022</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.rainbowTitle}>
          Cutie Hack 2022
        </h1>
      </main>
    </div>
  )
}

export default Home
