import { MoviesThumbnail } from "../..";

const ListSelectedMovies = ({movies}) => {
  return (
    <article className='grid md:grid-genres md:gap-5 gap-y-5 grid-cols-2'>
       {movies.map(movie => (
          <MoviesThumbnail key={movie.id} movie={movie} />
        ))}
    </article>
  )
};

export default ListSelectedMovies;
