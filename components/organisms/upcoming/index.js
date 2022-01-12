import { SectionMovie } from '..'

const Upcoming = ({ upComing }) => {
  
  return (
    <section className='mt-[-1.5rem]'>
      <SectionMovie movies={upComing} title='upcoming' />
    </section>
  )
}

export default Upcoming
