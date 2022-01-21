import { useContext } from 'react'
import { MovieContext } from '../../../utils/config/context';
import { Gap } from '../../atoms';


const InfoTambahan = () => {
  const [detailMovie, setDetailMovie] = useContext(MovieContext)
  return (
    <>
      <p className='font-bold text-xl'>Status :</p>
        <Gap className='h-2' />
        <p className='border inline-block border-green-500 px-3 rounded-md py-1'>{detailMovie.status}</p>
        <Gap className='h-4' />
        <p className='font-bold text-xl'>Bahasa yang digunakan :</p>
        <Gap className='h-2' />
        {detailMovie.spoken_languages.map(lang => (
          <p key={lang.name} className='italic'>{lang.name}</p>
        ))}
        <Gap className='h-4' />
        <p className='font-bold text-xl'>Anggaran</p>
        <p>{(detailMovie.budget).toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</p>
        <Gap className='h-4' />
        <p className='font-bold text-xl'>Pendapatan</p>
        <p>{(detailMovie.revenue).toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</p>
      </>  
  )
};

export default InfoTambahan;
