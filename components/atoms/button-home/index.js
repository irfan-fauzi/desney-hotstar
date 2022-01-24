import { useRouter } from 'next/router';
import { AiOutlineHome } from 'react-icons/ai'


const ButtonHome = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/')} className="border fixed top-5 right-5 z-[60] rounded-full bg-red-500 p-3"><AiOutlineHome size={25} color="#fff"/></button>
  )
};

export default ButtonHome;
