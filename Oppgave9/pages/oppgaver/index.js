import Link from 'next/link'

import styles from '../../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/api/List">
        <a>Hente collection</a>
      </Link>
      <Link href="/oppgaver/Senddata">
        <a>Send data</a>
      </Link>
    </div>
  )
}