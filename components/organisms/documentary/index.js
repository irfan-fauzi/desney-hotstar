import { SectionMovie } from ".."

const Documentary = ({ documentary }) => {
  return (
    <div className="mb-10">
      <SectionMovie movies={documentary} title='documentary' />
    </div>
  )
}

export default Documentary
