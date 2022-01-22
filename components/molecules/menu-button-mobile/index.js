import { MainLogo } from "../..";
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useContext } from "react";
import { showMenuContext } from "../../../utils/config/context";


const MenuButtonMobile = ({className}) => {
  const [showMenu, setShowMenu] = useContext(showMenuContext)

  return (
    <div className={className}>
      <MainLogo />
      <button onClick={() => setShowMenu(!showMenu)} className='text-white'>
        {!showMenu ? (<BiMenuAltRight size={40} />) : (<AiOutlineClose  size={30} />)}
          
      </button>
    </div>
  )
}

export default MenuButtonMobile;
