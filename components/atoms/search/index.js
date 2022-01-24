import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <>
    <input 
      type="text" 
      className='bg-transparent outline-none ' 
      placeholder='Search' />
         <button>
           <BiSearch className='text-3xl lg:text-2xl'/>
        </button>
    </>
  )
};

export default Search;
