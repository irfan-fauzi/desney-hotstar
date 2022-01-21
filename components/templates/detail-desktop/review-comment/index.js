import { useContext, useState } from 'react';
import { PreviewContext } from '../../../../utils/config/context';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import { Gap } from '../../..';


const ReviewComment = () => {
  const [preview, setPreview] = useContext(PreviewContext)
  const [showReview, setShowReview] = useState(false)
  return (
    <>
    <button 
      onClick={() => setShowReview(!showReview)} 
      className='font-bold text-xl flex items-center'>
      Ulasan ({preview.results.length}) {showReview ? (<BiChevronUp size={30} />) : (<BiChevronDown size={30} />)} </button><Gap className='h-3' />
          {showReview && (
            <div>
              {preview.results.map((review) => (
              <article key={review.content}>
                <p className='rounded-md inline-block bg-red-200 px-[5px] py-[2px] text-sm'>{review.author}</p>
                <Gap className='h-1' />
                <p className='text-xs w-10/12 italic'>{review.content}</p>
                <Gap className='h-1' />
              </article>
              ))}
            </div>
            )
          }
     </>     
  )
};

export default ReviewComment;
