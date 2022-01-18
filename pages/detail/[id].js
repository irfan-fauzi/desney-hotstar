import Image from 'next/image'
import { BsStarFill, BsFillBookmarksFill } from 'react-icons/bs'
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
        <div className='container-image relative after:content-[""] after:absolute after:top-0 after:bg-black after:w-full after:h-full lg:after:opacity-70 after:opacity-20'>
          <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.backdrop_path} className='inside-img ' layout='fill'/>
        </div>
        <article className='rounded-3xl bg-gradient-slider-top b relative -top-5  lg:-top-80  lg:mt-3'>
          <div className='p-5 relative lg:-top-80 '>
            <div className='lg:flex gap-10'>
            <div className='lg:inline-block px-1 pt-1 bg-white hidden '>
              <Image src={CONFIG.BASE_IMAGE_URL + reqDetail.poster_path} width={400} height={550} />
            </div>
            <div className=''>
              <Gap className='h-2' />
              <p className='text-white font-bold text-2xl lg:text-4xl'>{reqDetail.title}</p>
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
              <div className='flex gap-4'>
                {
                  reqDetail.genres.map(genre => (
                    <p key={genre.id} className='text-gray-700 uppercase text-sm'>{genre.name}</p>
                  ))
                }
              </div>
              <Gap className='h-2' />
              
              <p className='text-white font-light lg:w-10/12'>{reqDetail.overview}</p>
            </div>
            </div>
            <Gap className='h-20' />
            <div className='border p-2 bg-white lg:w-full lg:rounded-xl'>
              <p className='font-bold'>Production :</p>
              <Gap className='h-3 lg:h-5' />
              <div className='lg:flex lg:items-center justify-between'>
              {
                reqDetail.production_companies.map(el => (
                  <div key={el.id} className='mt-3'>
                    <img src={CONFIG.BASE_IMAGE_URL + el.logo_path} alt="logo" className={el.logo_path ? `w-[12rem] block` : `hidden`}/>
                    <Gap className='h-2' />
                    <p className='capitalize'>{el.name}</p>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </article>
        
      </section>
    </LayoutDetail>
  )
}

export default Detail
