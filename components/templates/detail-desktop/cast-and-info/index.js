
import { useContext } from 'react';
import { Gap, InfoTambahan, ListActors } from '../../..';
import { MovieContext } from '../../../../utils/config/context';

const CastAndInfo = () => {
  
  return (
    <>
    <p className='font-bold text-xl'>Casts :</p><Gap className='h-3' /><div className='flex gap-4'>
      <div className='w-9/12 '>
        <ListActors />
      </div>
      <div className='w-3/12'>
        <InfoTambahan  />
      </div>
    </div>
    </>
  )
};

export default CastAndInfo;
