import React, { useState, memo, useEffect } from 'react';
import { POST_TYPE, POST_FILE_TYPE } from '@/utils/constants';
import { getPostTypeByFile } from '@/utils/ultils';

import ImageEgger from '@/components/ImageEgger';
import VideoPlayer from '../video';
import PostLink from '../PostLink';
import SharePost from '../SharePost';
import AudioPlayer from '../AudioPlayer'
import styles from './RenderPostSource.module.css'

const RenderPostSource = (props) => {
  const { 
    postType, 
    postFile, 
    postLinkTitle, 
    postLinkContent, 
    postLink, 
    postYoutube, 
    postFileName, 
    fund_data, 
    postLinkImage, 
    shared_info, 
    publisher, 
    photo_multi, 
    globalWidth, 
    postDataDetail, 
    postId, 
    onOpenPostView, 
    postText,
    time
  } = props;
  let result;
    if (postType === POST_TYPE.POST) {
      if (postLink) {
        result = <PostLink postLinkTitle={postLinkTitle} postLinkContent={postLinkContent} postLink={postLink} postLinkImage={postLinkImage} />
      } else if (postFile || postYoutube) {
        const postFileType = getPostTypeByFile(postFile);
        if (postFileType === POST_FILE_TYPE.IMAGE) {
          result = <ImageEgger 
          src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
            alt={postId}
            width={650}
            height={400}
            priority
            layout="raw"
            className={styles.postImage}
            onClick={() => onOpenPostView(postDataDetail, 0)}
          />
        } else if (postFileType === POST_FILE_TYPE.AUDIO) {
          result = <AudioPlayer src={postFile} /> 
        }
        else {
          result =  (
            <VideoPlayer
              muted={false}
              setmutevideo={() => null}
              postFile={postFile}
              postYoutube={postYoutube}
            />
          );
        }       
      } else if (fund_data?.id) {
        const {image: imageFund} = fund_data
        // result = <Fund fund_data={fund_data} postId={postId} />
        result =  <ImageEgger 
        src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
          alt={postId}
          width={650}
          height={400}
          priority
          layout="raw"
          className={styles.postImage}
          onClick={() => onOpenPostView(postDataDetail, 0)}
        />
      }
    }
    else if (postType === POST_TYPE.PROFILE_COVER_PICTURE && postFile) {
      result = (
          <ImageEgger 
          src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
            alt={postId}
            width={650}
            height={400}
            priority
            layout="raw"
            className={styles.postImage}
            onClick={() => onOpenPostView(postDataDetail, 0)}
          />
      )
    }
    else if (postType === POST_TYPE.PROFILE_PICTURE && postFile) {
      result = (<ImageEgger 
        src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
        alt={postId}
        width={650}
        height={400}
        priority
        layout="raw"
        className={styles.postImage}
        onClick={() => onOpenPostView(postDataDetail, 0)}
      />)
    } else if (shared_info && shared_info.id) {
      result = (<SharePost 
        publisher={publisher} 
        postType={postType}
        postFile={postFile}
        postId={postId}
        postText={postText}
        time={time}
        postYoutube={postYoutube}
        postLink={postLink}
        postLinkImage={postLinkImage}
        postLinkContent={postLinkContent}
        postLinkTitle={postLinkTitle}
        postFileName={postFileName}
        fund_data={fund_data}
        shared_info={shared_info}
        photo_multi={photo_multi}
      />)
    } 
  return (
    <>
      {result}
    </>
    
  )
}

export default memo(RenderPostSource);