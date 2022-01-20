import Slider from 'react-slick'
import { HeroLayout } from '..'
import { Gap, GenreInfo, ListActors, RatingStar } from '../..'
import CONFIG from '../../../utils/config/config'

const DetailDesktop = ({reqDetail}) => {
 
  // const dateRealese = new Date(reqDetail.release_date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
  const director = reqDetail.credits.crew.filter(el => el.job === "Director")
  const producer = reqDetail.credits.crew.filter(el => el.job === "Producer")
  const screenPlay = reqDetail.credits.crew.filter(el => el.job === "Screenplay")
  
  
  return (
    <section>
      <Gap className='h-[5rem]' />
        <HeroLayout reqDetail={reqDetail}>
        <Gap className='h-10' />
        <article className='relative z-10 max-w-screen-xl mx-auto'>
          <div className='flex gap-10'>
            <section>
              <div className='w-[300px]'>
                <img src={CONFIG.BASE_IMAGE_URL_500 + reqDetail.poster_path} className='block rounded-lg'/>
               </div> 
            </section>
            <section className='w-8/12'>
              <h1 className='text-[2rem] text-white font-bold'>{reqDetail.title} <span className='font-normal text-2xl'>({reqDetail.release_date.slice(0, 4)})</span></h1>
              {/* <p className='text-gray-100 text-lg'>Release : {dateRealese}(US)</p> */}
              <Gap className='h-2' />
             <RatingStar />
             <Gap className='h-2' />
             {/* <GenreInfo reqDetail={reqDetail} /> */}
             <Gap className='h-2' />
             <p className='text-white font-semibold text-xl'>Sinopsis :</p>
             <Gap className='h-2' />
             <p className='text-white w-10/12'>{reqDetail.overview}</p>
             <Gap className='h-5' />
             <div className='flex gap-20 w-10/12'>
              <div>
                <p className='text-white capitalize font-bold italic'>director</p>
                <Gap className='h-2' />
                {director.map(el => (
                    <p key={el.id} className='text-white '>{el.name}</p>
                  ))}
              </div>
              <div>
                <p className='text-white capitalize font-bold italic'>original screenplay</p>
                <Gap className='h-2' />
                 {screenPlay.map(el => (
                   <p key={el.id} className='text-white '>{el.name}</p>
                 ))} 
              </div>
              <div>
                <p className='text-white capitalize font-bold italic'>producer</p>
                <Gap className='h-2' />
                {producer.map(el => (
                  <p key={el.id} className='text-white '>{el.name}</p>
                ))}
              </div>
             </div>
            </section>
          </div>
        </article>
      </HeroLayout>
      <div className='bg-gray-50'>
        <Gap className='h-5' />
        <div className='max-w-screen-xl mx-auto'>
          <p className='font-bold text-xl'>Casts :</p>
          <Gap className='h-3' />
          <div className='flex gap-4'>
            <div className='w-9/12 '>
              <ListActors casts={reqDetail.credits.cast} />
            </div>
            <div className='w-3/12'>
              <p className='font-bold text-xl'>Status :</p>
              <Gap className='h-2' />
              <p className='border inline-block border-green-500 px-3 rounded-md py-1'>{reqDetail.status}</p>
              <Gap className='h-4' />
              <p className='font-bold text-xl'>Bahasa yang digunakan :</p>
              <Gap className='h-2' />
              {reqDetail.spoken_languages.map(lang => (
                <p key={lang.name} className='italic'>{lang.name}</p>
              ))}
               <Gap className='h-4' />
              <p className='font-bold text-xl'>Anggaran</p>
              <p>{(reqDetail.budget).toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</p>
              <Gap className='h-4' />
              <p className='font-bold text-xl'>Pendapatan</p>
              <p>{(reqDetail.revenue).toLocaleString('en-US', {style: 'currency',currency: 'USD',})}</p>
            </div>
          </div>
        </div>
        <Gap className='h-10' />
     </div>
    </section>
  )
}

export default DetailDesktop
