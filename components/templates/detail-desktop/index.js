import { useContext } from 'react'
import { Gap, CastAndInfo, Container, HeroLayout, MovieDetail, MovieImage, ProductionCompany, ReviewComment, ListCarouselMovie } from '../..'
import { SimilarMovieContext } from '../../../utils/config/context'


const DetailDesktop = () => {

  const [similarMovie, setSimilarMovie] = useContext(SimilarMovieContext)  
  return (
    <section>
      <Gap className='h-[5rem]' />
      <HeroLayout>
        <Gap className='h-10' />
        <article className='relative z-10 max-w-screen-xl mx-auto  px-4'>
          <div className='flex gap-10'>
            <MovieImage />
            <MovieDetail />
          </div>
        </article>
      </HeroLayout>
      <div className='bg-gray-50 px-2'>
        <Gap className='h-5' />
        <Container>
          <CastAndInfo />
          <Gap className='h-5' />
          <ProductionCompany />
          <Gap className='h-10' />
          <ReviewComment />
          <Gap className='h-5' />
          <p className="text-xl font-semibold">Similar Movies :</p>
          <Gap className='h-5' />
          <ListCarouselMovie movies={similarMovie.results} />
          <Gap className='h-10' />
        </Container>
     </div>
    
    </section>
  )
}

export default DetailDesktop
