import { SectionMovie } from '..'

const Upcoming = ({ upComing }) => {
  
  return (
    <section>
      <SectionMovie movies={upComing} title='upcoming TV movies' />
    </section>
  )
}

export default Upcoming
