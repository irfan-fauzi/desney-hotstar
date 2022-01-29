import Link from "next/link"
import Image from 'next/image'

const MainLogo = () => {
  return (
    <Link href={`/`}>
      <a>
        <img src="/assets/images/logo.svg" className='w-[150px]' alt='logo' />
      </a>
    </Link>
  )
}

export default MainLogo
