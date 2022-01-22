import Link from "next/link"
import Image from 'next/image'

const MainLogo = () => {
  return (
    <Link href={`/`}>
      <a>
        <Image src="/assets/images/logo.svg" width={75} height={50} alt='logo' />
      </a>
    </Link>
  )
}

export default MainLogo
