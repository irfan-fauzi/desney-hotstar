export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className=' block w-10 h-full cursor-pointer absolute right-0 z-10 top-0 bg-gradient-slider-right'
      onClick={onClick}
    >s</div>
  );
  
}

 
export const PrevArrow = (props) => {
  const {onClick} = props
  return (
  <div
      className='block w-10 h-full cursor-pointer absolute left-0 z-10 top-0 bg-gradient-slider-left'
      onClick={onClick}
    >s</div>
  )
}

