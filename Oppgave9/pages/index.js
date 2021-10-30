import Link from 'next/link'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/oppgaver">
        <a>Klikk her finner du de løste oppgavene</a>
      </Link>
    </div>
  )
}
