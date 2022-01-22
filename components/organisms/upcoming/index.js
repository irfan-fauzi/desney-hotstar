import { SectionMovie } from '..'

const Upcoming = ({ upComing }) => {
  
  return (
    <section>
      <SectionMovie movies={upComing} title='most favorite Romance' />
    </section>
  )
}

export default Upcoming
