import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MeoWorldcup</title>
        <meta name="description" content="고양이 월드컵" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          고양이 이상형 월드컵 🐱
        </h1>

        <p className={styles.description}>
          고양이와 관련된 다양한 테마의 이상형 월드컵을 제공합니다
        </p>

        <div className={styles.grid}>
          <Link href="/facts">
            <a className={styles.card}>
              <h2>알쓸신잡 &rarr;</h2>
              <p>고양이와 관련된 알쓸신잡 중 가장 신기한 사실을 골라보세요!</p>
            </a>
          </Link>

          <Link href="/norwegian">
            <a className={styles.card}>
              <h2>노르웨이 숲 고양이 &rarr;</h2>
              <p>가장 매력적인 노르웨이 숲 고양이를 골라보세요!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
