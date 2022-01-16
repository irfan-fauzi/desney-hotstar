import { SectionMovie } from ".."

const Documentary = ({ documentary }) => {
  return (
    <div>
      <SectionMovie movies={documentary} title='documentary' />
    </div>
  )
}

export default Documentary
