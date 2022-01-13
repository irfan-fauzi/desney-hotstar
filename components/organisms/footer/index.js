import Image from 'next/image'
import { Gap } from '../..'
import logo from '../../../public/assets/images/logo.svg'
import appStore from '../../../public/assets/images/store.png'

const Footer = () => {
  return (
    <footer className='bg-black px-10 py-7 text-white'>
      <div className='flex items-center justify-between lg:flex-row flex-col'>
        <div className='lg:w-4/12 lg:block flex flex-col'>
          <Image src={logo} width={100} height={50} />
          <Gap className='h-5 lg:hidden' />
          <p className='text-sm lg:text-left text-center'>©2022 Desney dan entitas-entitas terkaitnya. Hak Cipta Dilindungi Undang-undang. © 2022 Entitas-entitas pemberi lisensi Desney, Hak Cipta Dilindungi Undang-undang </p>
        </div>
        <Gap className='h-5 lg:hidden' />
        <div className='flex items-start  lg:items-center lg:flex-row flex-col gap-5'>
          <div>
           <p className='text-lg text-center lg:text-left font-semibold'>Desney Hotstar App</p>
          <p>dapat diunduh secara gratis di :</p>
          </div>
          <Image src={appStore} height={140} width={200} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
