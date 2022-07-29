import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Schedules from './Schedules'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cutiehack 2022</title>
      </Head>

      <main className={styles.main}>
        <h1 className="text-orange-400">
          Welcome to <a href="https://nextjs.org">cutiehack 2022!</a>
        </h1>
        <Schedules></Schedules>
      </main>
    </div>
  )
}

export default Home
