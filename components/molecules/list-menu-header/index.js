import Link from "next/link"

const ListMenuHeader = () => {
  
  return (
  
    <ul className='flex gap-10 text-[1rem] lg:flex-row flex-col text-center'>
        <Link href={`/genre/28`}>
          <a>
            <li>Action</li>
          </a>
        </Link>
        <Link href={`/genre/27`}>
          <a>
            <li>Horror</li>
          </a>
        </Link>
        <Link href={`/genre/37`}>
          <a>
            <li>Western</li>
          </a>
        </Link>
        <Link href={`/genre/10752`}>
          <a>
            <li>War</li>
          </a>
        </Link>
      </ul>
  )
}

export default ListMenuHeader
