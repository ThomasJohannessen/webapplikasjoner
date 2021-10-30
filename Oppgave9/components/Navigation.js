import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/" passHref>
            <a className="first">Startside</a>
          </Link>
        </li>
        <li>
          <Link href="/api/list">
            <a>Liste</a>
          </Link>
          <li>
          <Link href="/api/Senddate">
            <a>Send data</a>
          </Link>
        </li>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
