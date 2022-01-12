import { SectionMovie } from '..'

const Upcoming = ({ upComing }) => {
  
  return (
    <section>
      <SectionMovie movies={upComing} title='upcoming' />
    </section>
  )
}

export default Upcoming
