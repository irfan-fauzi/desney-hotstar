import Link from "next/link"


const MainLogo = () => {
  return (
    <Link href={`/`}>
      <a>
        <img src="/assets/images/logo.png" className="w-[150px]" alt='logo' />
      </a>
    </Link>
  )
}

export default MainLogo
