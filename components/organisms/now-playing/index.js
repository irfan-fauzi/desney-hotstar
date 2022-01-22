import { SectionMovie } from '..'

const NowPlaying = ({ nowPlaying }) => {
  
  return (
    <section className='lg:mt-0  -mt-0'>
      <SectionMovie movies={nowPlaying} title='Now playing' />
    </section>
  )
}

export default NowPlaying
