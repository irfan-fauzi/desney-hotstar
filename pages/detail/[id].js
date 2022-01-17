import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'
import CONFIG from '../../utils/config/config'
import { fetchDetail } from "../../utils/fetch-ssr"
import { Gap, Layout, LayoutDetail } from '../../components'


export async function getServerSideProps({params}) {
  const reqDetail = await fetchDetail(params.id)
  if(reqDetail.success == false) {
    return {
      notFound: true
    }
  }
  return {
    props: {reqDetail}
  }
}

const Detail = ({reqDetail}) => {  
  const star = [1,2,3,4,5]
  return (
    <LayoutDetail>
      <section>
        <div className='container-image relative after:content-["sa"] after:absolute after:top-0 after:bg-black after:w-full after:h-full after:opacity-80'>
          <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} className='inside-img ' layout='fill'/>
        </div>
        <article className='rounded-3xl bg-gradient-slider-top relative -top-52 -mb-52'>
          <div className='p-5 relative -top-48'>
            <div className=' inline-block px-1 pt-1 bg-black'>
              <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} width={200} height={300}/>
            </div>
            <Gap className='h-2' />
            <p className='text-white font-bold text-2xl'>{reqDetail.title}</p>
            <Gap className='h-2' />
            <div className='flex gap-2 items-center'>
              <div className='flex gap-2 '>
                {star.map(el => (
                  <BsStarFill className={star.indexOf(el) > 3 ? `text-white` : `text-red-400`} />
                ))}
              </div>
              <p className='text-gray-400 font-bold'>{reqDetail.vote_average}</p>
            </div>
            <Gap className='h-2' />
            <p className='text-white font-light'>{reqDetail.overview}</p>
            
          </div>
        </article>
        
      </section>
    </LayoutDetail>
  )
}

export default Detail
