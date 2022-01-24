import Link from "next/link"
import { useContext } from "react"
import { showMenuContext } from "../../../utils/config/context"


const MyButton = ({title, href}) => {
  const [showMenu, setShowMenu] = useContext(showMenuContext)
  return(
    <a href={href} className="cursor-pointer" onClick={() => {
      setShowMenu(false)
      
      }
    }
    >{title}</a>
  )
  
}

const ListMenuHeader = () => {
  
  
  return (
    <ul className='flex gap-10 text-[1rem] lg:flex-row flex-col text-center'>
      <Link href={`/genre/28`} >
        <MyButton title={'Action'} href={'/genre/28'} />        
      </Link>
      <Link href={`/genre/27`}>
        <MyButton title={'Horror'} href={`/genre/27`}/>
      </Link>
      <Link href={`/genre/37`}>
        <MyButton title={'Western'} href={`/genre/37`} />
      </Link>
      <Link href={`/genre/99`}>
        <MyButton title={'Documentary'} href={`/genre/99`}/>
      </Link>
    </ul>
  )
}

export default ListMenuHeader
