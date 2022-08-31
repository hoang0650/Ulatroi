import React from 'react';
import Image from 'next/future/image';
import ImageEgger from '../ImageEgger';
import styles from './Fund.module.css'

const PostLink = (props) => {
  const {fund_data = {}, postId} = props;
  const {image} = fund_data;
  return (
    <ImageEgger 
      src={"https://i.pinimg.com/736x/a2/6b/d3/a26bd3b88f30608733ab7cdc630066e6.jpg"}
      alt={postId}
      width={650}
      height={400}
      priority
      layout="raw"
      className={styles.postImage}
    />
  )
}

export default PostLink;