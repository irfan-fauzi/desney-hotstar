import Image from 'next/image'

const Header = () => {
  return (
    <div>
      <nav>
        <div className="flex">
          <div>
            <Image src="/assets/images/logo.svg" width={100} height={50} alt='logo' />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
