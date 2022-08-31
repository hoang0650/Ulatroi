// import { HeartIcon } from '@heroicons/react/solid';
import {memo} from 'react'
import { BookmarkIcon, HeartIcon, ChatIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { POST_TYPE } from '@/utils/constants';
import { convertUnixTimeToRelative } from '@/utils/ultils';
import MultiplePhoto from '@/components/MultiplePhoto';
import PostTextComponent from '../PostText';
import ShareAction from '../ShareAction'

import RenderPostSource from '../RenderPostSource';
import Link from 'next/link'

const CardFeed = (props) => {
  const {
    postType,
    postFile,
    postId,
    postText,
    publisher,
    time,
    postYoutube,
    postLink,
    postLinkImage,
    postLinkContent,
    postLinkTitle,
    postFileName,
    fund_data,
    shared_info,
    photo_multi,
    globalWidth,
    isShare,
    postData,
    onOpenPostView
  } = props;

  const renderGalaryImage = ({photos, postDataDetail}) => {
    return (
      <MultiplePhoto photos={photos}  onClick={(indexImage) => onOpenPostView(postDataDetail, indexImage)} />
    )
  }
  return (
    <>
      <div id={postId} className={`${isShare ? '' : 'mt-5 mb-0 md:mb-24'} items-end justify-center gap-4 w-full max-w-2xl transition duration-300  delay-150 ease-in-out`} >
        <div className=" rounded-lg bg-white shadow-lg" >
          <div className="p-3">
            <div className="flex items-center justify-between">
              <ShareAction />
              <div className="flex items-center space-x-2">
                <Image src={publisher?.avatar}
                  alt={`${publisher?.avatar}-avatar`}
                  width={48}
                  height={48}
                  href="/user/[id]" as={`/user/${publisher?.user_id}`}
                  className="bg-coolGray-500 border-coolGray-700 rounded-full object-cover object-center shadow-sm" />
              </div>
             <Link href="/user/[id]" as={`/user/${publisher?.user_id}`}>Go</Link>
              <div className='w-10'>
                <BookmarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </div>
            </div>
          </div>
          <div className='md:px-4 px-1 pb-0 md:pb-4'>
            <RenderPostSource
              key={postId}
              postId={postId}
              postType={postType}
              postFile={postFile}
              postLinkTitle={postLinkTitle}
              postLinkContent={postLinkContent}
              postLink={postLink}
              postYoutube={postYoutube}
              postFileName={postFileName}
              fund_data={fund_data}
              postLinkImage={postLinkImage}
              shared_info={shared_info}
              postDataDetail={postData}
              onOpenPostView={onOpenPostView}
              postText={postText}
              time={time}
            />
            {!(shared_info && shared_info.id) && renderGalaryImage({photos: photo_multi, postDataDetail: postData})}
          </div>
          <div className='p-4'>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold leading-none">
                {publisher?.name}
              </h2>
              {!isShare && <div className='flex tems-center justify-between gap-4'>
                <ChatIcon width={24} className="text-gray-500 cursor-pointer" onClick={() => onOpenPostView(postData, 0)} />
                <HeartIcon width={24} className="text-gray-500"/>
              </div>}
            </div>
            <PostTextComponent postText={postText} />
            <span className="inline-block text-gray-500 text-xs leading-3">
              {postType === POST_TYPE.PROFILE_COVER_PICTURE && <span>Cập nhật ảnh bìa -</span>} 
              {postType === POST_TYPE.PROFILE_PICTURE && <span>Cập nhật ảnh đại diện -</span>} 
              {postType === POST_TYPE.POST && fund_data?.id && <span>Tạo sự kiện ủng hộ -</span>} 
              {convertUnixTimeToRelative(time)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CardFeed);
