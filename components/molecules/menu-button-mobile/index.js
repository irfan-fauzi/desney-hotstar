import { MainLogo } from "../..";
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useContext } from "react";
import { showMenuContext } from "../../../utils/config/context";


const MenuButtonMobile = () => {
  const [showMenu, setShowMenu] = useContext(showMenuContext)
  console.log(showMenu)
  return (
    <div className='w-full h-[80px] bg-black fixed top-0 z-50 rounded-b-3xl flex items-center justify-between px-4 lg:hidden'>
      <MainLogo />
      <button onClick={() => setShowMenu(!showMenu)} className='text-white'>
        {!showMenu ? (<BiMenuAltRight size={40} />) : (<AiOutlineClose  size={40} />)}
          
      </button>
    </div>
  )
}

export default MenuButtonMobile;
