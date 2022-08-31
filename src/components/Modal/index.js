import React, { useState, memo, useRef, Fragment } from 'react'
import { Dialog, Transition, } from '@headlessui/react'
import ImageEgger from '../ImageEgger'
import {getTypeOfPost, convertUnixTimeToRelative, genPostDetailLink} from '@/utils/ultils'
import {DISPLAY_POST_TYPE} from '@/utils/constants'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/outline'
import ModalBottom from '@/components/ModalBottom'
import PostTextComponent from '@/components/PostText'
import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/solid'
import SwiperComponent from '../Swiper'
import VideoPlayer from '../video';
import PostInfo from './PostInfo';
import PostLink from '../PostLink';
import SharePost from '../SharePost'
import styles from './Modal.module.css';

const MyDialog = (props) => { 
  const {isOpen = false, setIsOpen, postData, isDetail, domain, defaultImage} = props;
  const cancelButtonRef = useRef(null);
  const actionButtonRef = useRef(null);
  const [isShowComment, setisShowComment] = useState(false);

  const result = getTypeOfPost({...postData});

  const data = postData?.photo_multi?.length > 0 ? postData.photo_multi : [{image: result === DISPLAY_POST_TYPE.IMAGE_FUND ? postData?.fund_data?.image : ( result === DISPLAY_POST_TYPE.VIDEO ? postData.postFileThumb : postData.postFile_full) , id: postData.id}];

  const onCopyText = (e) => {
    e.preventDefault();
    var textField = document.createElement('textarea');
    textField.innerText = genPostDetailLink( window.location.origin, postData?.id);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white text-left overflow-hidden shadow-xl transform transition-all w-full h-screen">
                <div className='flex sm:flex-row flex-col h-full sm:bg-none sm:bg-opacity-1 '>
                  <div className='relative sm:w-8/12 h-full w-full sm:px-20 px-1 overflow-hidden bg-black'>
                    {isDetail && 
                       <Link href={{pathname: '/', }}>
                        <div className='sm:top-5 sm:left-5 top-3 left-3 p-3 rounded-full bg-slate-300 bg-opacity-70 absolute cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-30'>
                          <XIcon className='sm:w-5 sm:h-5 w-3 h-3 text-white'/>
                        </div>
                      </Link>
                    }
                    {!isDetail && 
                      <div onClick={() => setIsOpen(false)} ref={cancelButtonRef} className='sm:top-5 sm:left-5 top-3 left-3 p-3 rounded-full bg-slate-300 bg-opacity-70 absolute cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-30'>
                        <XIcon className='sm:w-5 sm:h-5 w-3 h-3 text-white'/>
                      </div>
                    }
                    
                    {data.length > 1 && <div onClick={() =>actionButtonRef?.current?.onPrev()}  className='top-1/2 hidden sm:block sm:left-5 left-3 p-3 rounded-full bg-slate-300 bg-opacity-70 absolute cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-10'>
                      <ChevronLeftIcon className='sm:w-5 sm:h-5 w-3 h-3 text-white'/>
                    </div> }
                    <div className='relative w-full h-full'>
                      <div className={styles.bgCoverPost} style={{backgroundImage:`url(${ data.length > 0  ? data[0].image : 'https://cdn.ulatroi.net/ftp/upload/photos/2022/06/xLMOhKvHXlVPnXnzDoUm_24_a3dc1fd7dd4ea31324e9d496a9cd2379_image.jpg'})`}}></div>
                      <div className='flex items-center justify-center z-20 h-full'>
                        {result === DISPLAY_POST_TYPE.IMAGE && <SwiperComponent photos={data} actionButtonRef={actionButtonRef} defaultSlide={defaultImage}/>}
                        {result === DISPLAY_POST_TYPE.IMAGE_FUND && <SwiperComponent photos={data} actionButtonRef={actionButtonRef} defaultSlide={defaultImage} />}
                        
                        {result === DISPLAY_POST_TYPE.AUDIO &&  
                          <audio
                            controls
                            className='w-2/3'
                            src={postData.postFile_full}>
                              Your browser does not support the
                              <code>audio</code> element.
                          </audio>
                        }
                        {result === DISPLAY_POST_TYPE.VIDEO && 
                          <div className={`w-full ${postData.postYoutube ? 'h-3/5' : ''}`}>
                            <VideoPlayer
                              muted={false}
                              setmutevideo={() => null}
                              postFile={postData.postFile_full}
                              postYoutube={postData.postYoutube}
                              noBackground
                              controls={false}
                              autoplay={true}
                            />
                          </div>
                        }
                        {result === DISPLAY_POST_TYPE.LINK && <PostLink postLinkTitle={postData?.postLinkTitle} postLinkContent={postData?.postLinkContent} postLink={postData?.postLink} postLinkImage={postData?.postLinkImage} />}

                        {result === DISPLAY_POST_TYPE.SHARE && 
                          <SharePost 
                            publisher={postData?.publisher} 
                            postType={postData?.postType}
                            postFile={postData?.postFile_full}
                            postId={postData?.postId}
                            postText={postData?.postText}
                            time={postData?.time}
                            postYoutube={postData?.postYoutube}
                            postLink={postData?.postLink}
                            postLinkImage={postData?.postLinkImage}
                            postLinkContent={postData?.postLinkContent}
                            postLinkTitle={postData?.postLinkTitle}
                            postFileName={postData?.postFileName}
                            fund_data={postData?.fund_data}
                            shared_info={postData?.shared_info}
                            photo_multi={postData?.photo_multi}
                          />
                        }
                      </div>
                    </div>
                    {data.length > 1 && <div onClick={() => actionButtonRef?.current?.onNext()} className='top-1/2 hidden sm:block sm:right-5 right-3 p-3 rounded-full bg-slate-300 bg-opacity-70 absolute cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-10'>
                      <ChevronRightIcon className='sm:w-5 sm:h-5 w-3 h-3 text-white'/>
                    </div>}
                  </div>
                  {
                  <div className='hidden relative w-4/12 sm:flex flex-col'>
                    <PostInfo postData={postData} link={genPostDetailLink( domain, postData?.id)}/>
                  </div>
                  }
                  {/* <div className='top-2/3 sm:hidden right-3 p-3 rounded-full bg-slate-300 bg-opacity-70 absolute cursor-pointer transition ease-in-out delay-150 hover:bg-slate-500 z-10'> */}
                  <div className=' top-[55%] sm:hidden right-3 absolute flex flex-col justify-center items-center gap-3 z-40'>
                    <div className='flex flex-col justify-center items-center z-30  cursor-pointer '>
                      <HeartIcon className="transition ease-in-out delay-150  z-30 w-10 bg-none h-10 opacity-80  text-[#f0eeee] "/>
                      <span className='text-[#f0eeee]'>{postData?.reaction?.count}</span>
                    </div>
                    <div className='flex flex-col justify-center items-center z-30  cursor-pointer '>
                      <ChatIcon className="transition ease-in-out delay-15 z-30 w-10 h-10 bg-none opacity-80 text-[#f0eeee] " onClick={() => setisShowComment(true)}/>
                      <span className='text-[#f0eeee]'>{postData?.get_post_comments?.length}</span>
                    </div>
                    <div className='flex flex-col justify-center items-center z-30  cursor-pointer '>
                      <ShareIcon className="transition ease-in-out delay-150 w-8 h-8 opacity-80 bg-none text-[#f0eeee] " onClick={onCopyText} />
                      <span className='text-[#f0eeee]'></span>
                    </div>
                  </div>
                   
                  {/* </div> */}
                  <div className={` absolute sm:hidden absolute bottom-0 left-0 z-30 p-1  w-full bg-opacity-60 ${styles.bgInfo} `}>
                    <div className="flex items-center space-x-4 mb-6">
                      <ImageEgger 
                        src={postData?.publisher?.avatar}
                        alt={`${postData?.publisher?.name}-avatar`}
                        width={48}
                        height={48}
                        className="bg-coolGray-500 border-coolGray-700 rounded-full object-cover object-center shadow-sm" />
                        <div className="space-y-1 font-medium text-white">
                          <h2 className='text-white'>{postData?.publisher?.name}</h2>
                          <div className="text-sm text-white"> {convertUnixTimeToRelative(postData?.time)}</div>
                        </div>
                    </div>
                    <PostTextComponent postText={postData.postText} color="white" size="small" />
                  </div>
                  <ModalBottom show={isShowComment} setShow={setisShowComment} title="Bình luận">
                    <div className='z-30 p-2 w-full bg-opacity-60'>
                  
                    <div className={'h-12 flex justify-center items-center'}>No comment</div>
                      <div className=' bottom-0  '>
                        <div className="flex flex-row items-center  justify-center gap-3">
                          <input type="text" className="bg-gray-200  text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none" placeholder="Viết bình luận..." required />
                          <button>Post</button>
                        </div>
                      </div>
                    </div>
                  </ModalBottom>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default memo(MyDialog);