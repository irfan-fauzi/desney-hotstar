import { SectionMovie } from ".."
import { Gap } from "../.."

const Documentary = ({ documentary }) => {
  return (
    <div>
      <SectionMovie movies={documentary} title='Popular TV Movies' />
      <Gap className='h-20' />
    </div>
  )
}

export default Documentary
