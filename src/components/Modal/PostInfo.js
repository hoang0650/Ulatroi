import React, { useState, memo, useImperativeHandle } from 'react'
import { HeartIcon, ChatIcon } from '@heroicons/react/solid'
import {convertUnixTimeToRelative} from '@/utils/ultils'
import PostTextComponent from '@/components/PostText'
import ImageEgger from '../ImageEgger';
import LinkCopy from './LinkCopy';
import styles from './Modal.module.css'
const PostInfo = (props) => {
  const {postData = {}, link} = props;

  const {publisher = {}, time, reaction, get_post_comments} = postData;

  return (
    <>
      <div className='px-10 pt-10 pb-6'>
        <div className="flex items-center space-x-4 mb-6">
          <ImageEgger 
            src={publisher?.avatar}
            alt={`${publisher?.name}-avatar`}
            width={48}
            height={48}
            className="bg-coolGray-500 border-coolGray-700 rounded-full object-cover object-center shadow-sm" />
            <div className="space-y-1 font-medium dark:text-white">
              <h2 className='text-black'>{publisher?.name}</h2>
              <div className="text-sm text-gray-500 dark:text-gray-400"> {convertUnixTimeToRelative(time)}</div>
            </div>
        </div>
        {/* <p
          className="my-2 text-sm text-gray-700 mb-8"
          dangerouslySetInnerHTML={{ __html: postData.postText }}
        ></p> */}
        <PostTextComponent postText={postData.postText} />
        <div className='flex flex-row items-center gap-4 mb-6 mt-4'>
          <div className='relative flex-row flex gap-1 justify-center items-center'>
            <div className='flex items-center justify-center w-8 h-8 p-1 rounded-full bg-slate-300 bg-opacity-70  cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-10'>
              <HeartIcon className='w-6 h-6 text-black'/>
            </div>
            <span className='text-sm'>{reaction?.count}</span>
          </div>
        
          <div className='relative flex-row flex gap-1 justify-center items-center'>
            <div className='flex items-center justify-center w-8 h-8 p-1 rounded-full bg-slate-300 bg-opacity-70  cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-10'>
              <ChatIcon className='w-6 h-6 text-black'/>
            </div>
            <span className='text-sm'>{get_post_comments?.length}</span>
          </div>
        </div>
        <div>
          <LinkCopy link={link} />
        </div>
      </div>
      <div className={styles.comment}>No comment</div>
      <div className='px-10 py-6 bottom-0  '>
        <div className="flex flex-row items-center  justify-center gap-3">
          <input type="text" className="bg-gray-200  text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none" placeholder="Viết bình luận..." required />
          <button>Post</button>
        </div>
      </div>
    </>
  )
}

export default memo(PostInfo);