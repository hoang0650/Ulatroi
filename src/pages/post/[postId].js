
import {Main} from '@/templates/Main';
import {Meta} from '@/layouts/Meta';

import MyDialog from '@/components/Modal'
import FormData from 'form-data'
import Axios from 'axios'
import React, {useEffect, useState, useRef} from 'react'


const Post = (props) => {

  const [isOpenModal, setIsOpenModal] = useState(true);

  const {currentPostView, domain} = props;

  if(!currentPostView) {
    return (<div>404</div>)
  }
 

  return (
    <Main
      meta={
        <Meta
          title="Ulatroi"
          description="Ulatroi description"
        />
      }
    >
      <MyDialog isDetail={true} isOpen={isOpenModal} setIsOpen={setIsOpenModal} postData={currentPostView} domain={domain}/>
    </Main>
  )
}

export async function getServerSideProps(context) {

  const {params} = context;
  const {postId} = params;
  let postData = null
  if (postId) {
    const dataBody = new FormData();
    dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
    dataBody.append('fetch', 'post_data');
    dataBody.append('post_id', postId);
  
    const response = await Axios.post(
      'https://ulatroi.net/api/get-post-data?access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
      dataBody
    );

    if (response?.data?.post_data && response?.data?.post_data?.id) {
      postData =  response?.data?.post_data
    }
  }

  const domain = context?.req?.headers?.host;
  
  return {
    props: {
      currentPostView: postData,
      domain
    },
  };
}

export default Post