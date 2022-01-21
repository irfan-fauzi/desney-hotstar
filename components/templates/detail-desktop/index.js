// import {  } from '..'
import { Gap, CastAndInfo, Container, HeroLayout, MovieDetail, MovieImage, ProductionCompany, ReviewComment } from '../..'

const DetailDesktop = () => {
    
  return (
    <section>
      <Gap className='h-[5rem]' />
      <HeroLayout>
        <Gap className='h-10' />
        <article className='relative z-10 max-w-screen-xl mx-auto'>
          <div className='flex gap-10'>
            <MovieImage />
            <MovieDetail />
          </div>
        </article>
      </HeroLayout>
      <div className='bg-gray-50'>
        <Gap className='h-5' />
        <Container>
          <CastAndInfo />
          <Gap className='h-5' />
          <ProductionCompany />
          <Gap className='h-10' />
          <ReviewComment />
          <Gap className='h-10' />
        </Container>
     </div>
    </section>
  )
}

export default DetailDesktop
