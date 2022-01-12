import { SectionMovie } from '..'

const NowPlaying = ({ nowPlaying }) => {
  
  return (
    <section>
      <SectionMovie movies={nowPlaying} title='Now playing' />
    </section>
  )
}

export default NowPlaying
