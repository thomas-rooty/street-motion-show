import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🚲 Street Motion Show</title>
        <meta name="description" content="Show de Street Trial ..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.instagram.com/loris.thibault/">Street Motion Show!</a>
        </h1>
      </main>
    </div>
  )
}
