import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react/cjs/react.development"
import { showMenuContext } from "../../../utils/config/context"

const ListMenuHeader = () => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useContext(showMenuContext)
  
  
  return (
    <ul className='flex gap-10 text-[1rem] lg:flex-row flex-col text-center'>
      
      <button onClick={() => {
        router.push('/genre/28')
        setShowMenu(false)
      }}>Action</button>
      
      <button onClick={() => {
        router.push('/genre/27')
        setShowMenu(false)
      }}>Horror</button>
      
      <button onClick={() => {
        router.push('/genre/37')
        setShowMenu(false)
      }}>Western</button>
     
      <button onClick={() => {
        router.push('/genre/99')
        setShowMenu(false)
      }}>Documentary</button>
    </ul>
  )
}

export default ListMenuHeader
