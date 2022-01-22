import { SectionMovie } from '..'

const NowPlaying = ({ nowPlaying }) => {
  
  return (
    <section className='-mt-20 lg:mt-0'>
      <SectionMovie movies={nowPlaying} title='Now playing' />
    </section>
  )
}

export default NowPlaying
