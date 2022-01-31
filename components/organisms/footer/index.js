import Image from 'next/image'
import { Gap } from '../..'
import logo from '../../../public/assets/images/logo.png'
import appStore from '../../../public/assets/images/store.png'

const Footer = () => {
  return (
    <footer className='bg-black px-10 py-7 text-white mt-auto'>
      <div className='flex items-center justify-between lg:flex-row flex-col lg:max-w-screen-xl lg:mx-auto'>
        <div className='lg:w-4/12 lg:block flex flex-col'>
          <div className="flex item center justify-center lg:justify-start">
            <img src="/assets/images/logo.png" alt='logo' className='w-[150px]' />
          </div>
          <Gap className='h-5' />
          <p className='text-sm lg:text-left text-center'>©2022 Movie planet dan entitas-entitas terkaitnya. Hak Cipta Dilindungi Undang-undang. © 2022 Entitas-entitas pemberi lisensi, Hak Cipta Dilindungi Undang-undang </p>
        </div>
        <Gap className='h-5 lg:hidden' />
        <div className='flex items-start  lg:items-center lg:flex-row flex-col gap-5'>
          <div>
           <p className='text-lg text-center lg:text-left font-semibold'>Movie Planet App</p>
          <p>dapat diunduh secara gratis di :</p>
          </div>
          <Image src={appStore} height={140} width={200} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
