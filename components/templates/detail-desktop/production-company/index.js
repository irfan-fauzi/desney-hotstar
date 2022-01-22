import { useContext } from "react";
import { Gap } from "../../..";
import CONFIG from "../../../../utils/config/config";
import { MovieContext } from "../../../../utils/config/context";

const ProductionCompany = () => {
 const [detailMovie, setDetailMovie] = useContext(MovieContext)
  return (
    <><p className='font-bold text-xl ml-2'>production companies</p><Gap className='h-5' /><div className='p-2 lg:w-full rounded-lg lg:rounded-xl '>
      <div className='flex text-center items-center gap-20'>
        {detailMovie.production_companies.map(el => (
          <div key={el.id} className='mt-3'>
            <img src={CONFIG.BASE_IMAGE_URL_500 + el.logo_path} alt="logo" className={el.logo_path ? `w-[9rem] block ` : `hidden`} />
            <Gap className='h-2' />
            <p className='capitalize'>{el.name}</p>
          </div>
        ))}
      </div>
    </div></>
  )
};

export default ProductionCompany;
