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
          <Link href="/side2">
            <a>Side2</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
