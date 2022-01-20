const GenreInfo = ({reqDetail}) => {
  return (
    <div className='flex gap-4'>
    {
      reqDetail.genres.map(genre => (
        <p key={genre.id} className='text-gray-100 uppercase text-[0.8rem]'>{genre.name}</p>
      ))
    }
  </div>
  )
};

export default GenreInfo;
