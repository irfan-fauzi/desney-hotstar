import React from 'react';
import { Gap } from '../..';

const SkeletonLoading = () => {
  return (
    <div className="relative h-[100vh] w-full bg-black">
          <div className="px-4">
            <div className="relative top-20 mx-auto max-w-screen-lg h-[200px] bg-gradient-slider-right animate-pulse"></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
            <Gap className='h-5' />
            <div className="relative top-20 mx-auto max-w-screen-lg h-[35px] bg-gradient-slider-right animate-pulse "></div>
          </div>
        </div>
  )
};

export default SkeletonLoading;
