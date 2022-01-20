import { HeroLayout } from '..'
import { Gap, GenreInfo, RatingStar } from '../..'
import CONFIG from '../../../utils/config/config'
import { dateId } from '../../../utils/config/date'


const DetailDesktop = ({reqDetail}) => {
 
  const dateRealese = dateId(reqDetail.release_date)
  const director = reqDetail.credits.crew.filter(el => el.job === "Director")
  const producer = reqDetail.credits.crew.filter(el => el.job === "Producer")
  const screenPlay = reqDetail.credits.crew.filter(el => el.job === "Screenplay")
  
  
  return (
    <section>
      <Gap className='h-[5rem]' />
        <HeroLayout reqDetail={reqDetail}>
        <Gap className='h-6' />
        <article className='relative z-10 max-w-screen-xl mx-auto'>
          <div className='flex gap-10'>
            <section>
              <div className='w-[300px]'>
                <img src={CONFIG.BASE_IMAGE_URL_500 + reqDetail.poster_path} className='block rounded-lg'/>
               </div> 
            </section>
            <section className='w-8/12'>
              <h1 className='text-[2rem] text-white font-bold'>{reqDetail.title} <span className='font-normal text-2xl'>({reqDetail.release_date.slice(0, 4)})</span></h1>
              <p className='text-gray-100 text-lg'>Release : {dateRealese}(US)</p>
              <Gap className='h-2' />
             <RatingStar />
             <Gap className='h-2' />
             <GenreInfo reqDetail={reqDetail} />
             <Gap className='h-2' />
             <p className='text-white font-semibold text-xl'>Sinopsis :</p>
             <Gap className='h-2' />
             <p className='text-white w-10/12'>{reqDetail.overview}</p>
            </section>
          </div>
        </article>
      </HeroLayout>
     
    </section>
  )
}

export default DetailDesktop
