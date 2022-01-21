import { useContext } from "react";
import { Gap } from "../../../..";
import { MovieContext } from "../../../../../utils/config/context";


const Crews = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  const director = detailMovie.credits.crew.filter(el => el.job === "Director")
  const producer = detailMovie.credits.crew.filter(el => el.job === "Producer")
  const screenPlay = detailMovie.credits.crew.filter(el => el.job === "Screenplay")
  return (
  <div className='flex gap-20 w-10/12'>
              <div>
                <p className='text-white capitalize font-bold italic'>director</p>
                <Gap className='h-2' />
                {director.map(el => (
                    <p key={el.id} className='text-white '>{el.name}</p>
                  ))}
              </div>
              <div>
                <p className='text-white capitalize font-bold italic'>original screenplay</p>
                <Gap className='h-2' />
                 {screenPlay.map(el => (
                   <p key={el.id} className='text-white '>{el.name}</p>
                 ))} 
              </div>
              <div>
                <p className='text-white capitalize font-bold italic'>producer</p>
                <Gap className='h-2' />
                {producer.map(el => (
                  <p key={el.id} className='text-white '>{el.name}</p>
                ))}
              </div>
             </div>
  )
};

export default Crews;
