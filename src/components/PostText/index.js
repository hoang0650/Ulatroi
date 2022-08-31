import React, { useState, memo, useEffect } from 'react'


const PostTextComponent = (props) => {
  const { postText, color, size} = props;
  const [showMore, setShowMore] = useState(null);

  useEffect(() => {
    if(postText && postText.length > 200) {
      setShowMore(false)
    }
  }, [postText])
  return (
    <>
      <p
        className={`my-2 text-sm  overflow-hidden ${color === "white" ? 'text-white' : 'text-gray-700'} ${showMore ? 'max-h-max' : `${size === 'small' ? 'max-h-6' : 'max-h-36'}`}`}
        dangerouslySetInnerHTML={{ __html: postText }}
      ></p>
      {
        showMore === false && (<p className='cursor-pointer' onClick={() => setShowMore(true)}>
          <span className={color === "white" ? 'text-white' : 'text-gray-700'}>...</span>
          <span className={`text-sm ${color === "white" ? 'text-white' : 'text-gray-700'}`}>Xem thêm</span>
        </p>)
      }
      {
        showMore === true && (<p className='cursor-pointer' onClick={() => setShowMore(false)}>
          <span className={`text-sm font-bold ${color === "white" ? 'text-white' : 'text-gray-700'}`}>Thu gọn</span>
        </p>)
      }
   

    </>
    
  )
}

export default memo(PostTextComponent);