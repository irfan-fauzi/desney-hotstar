import { SectionMovie } from '..'

const Upcoming = ({ upComing }) => {
  
  return (
    <section>
      <SectionMovie movies={upComing} title='most favorite box-office' />
    </section>
  )
}

export default Upcoming
