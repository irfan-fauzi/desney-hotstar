import axios from 'axios';
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import API_ENDPOINT from '../../../utils/config/api-endpoint';
import { search } from '../../../utils/live-search';


const Search = () => {
  const [loading, setLoading] = useState(false)
  const [value, steValue] = useState('')
  const [movies, setMovies] = useState(null)

  const searchMovie = async (value) => {
    if(value == ""){
      return false 
    }
    setLoading(true)
    const response = await search(API_ENDPOINT.SEARCH_MOVIE(value))
    const moviesResponse = response
    setMovies(moviesResponse)
    setLoading(false)
  }

  const onChangeHandler = async (e) => {
    searchMovie(e.target.value)
    steValue(e.target.value)
  }
  
  return (
    <div className='relative  flex items-center w-full justify-between'>
      <input 
        onChange={onChangeHandler}
        value={value}
        type="text" 
        className='bg-transparent outline-none ' 
        placeholder='Search'
      />
      <button>
        <BiSearch className='text-3xl lg:text-2xl'/>
      </button>
      <article className='absolute w-full top-10 left-0 bg-black bg-opacity-90 overflow-auto z-50'>
        {
          value && movies && movies.map((movie) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
            </div>
          ))
        }
      </article>  
    </div>
  )
};

export default Search;
