// import { HeartIcon } from '@heroicons/react/solid';
import { BookmarkIcon, HeartIcon, ChatIcon } from '@heroicons/react/outline';
import Image from 'next/future/image'
import { POST_TYPE, POST_FILE_TYPE } from '@/utils/constants';
import { convertUnixTimeToRelative, getPostTypeByFile } from '@/utils/ultils';
import Card from '../Card'
import styles from './SharePost.module.css';

const SharePost = (props) => {
  const {
    postId,
    publisher,
    shared_info,
    time,
    postType
  } = props;


  return (
    <>
      <div className="mt-5 mb-5 flex items-end justify-center gap-4  max-w-2xl border-slate-300 rounded-lg border">
        <div key={shared_info.post_id} className="flex justify-center h-full">
          <Card
            postType={shared_info.postType}
            postFile={shared_info.postFile}
            postId={shared_info.post_id}
            postText={shared_info.postText}
            publisher={shared_info.publisher}
            time={shared_info.time}
            postYoutube={shared_info.postYoutube}
            postLink={shared_info.postLink}
            postLinkImage={shared_info.postLinkImage}
            postLinkContent={shared_info.postLinkContent}
            postLinkTitle={shared_info.postLinkTitle}
            postFileName={shared_info.postFileName}
            fund_data={shared_info.fund_data}
            shared_info={shared_info.shared_info}
            photo_multi={shared_info.photo_multi}
            isShare={true}
          />
        </div>
      </div>
    </>
  );
};

export default SharePost;
