import {
  AtomTrigger,
  useWindowDimensions,
  useWindowScroll
} from "react-atom-trigger";
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import styles from './video.module.css';
import YoutubePlayer from './Youtube';

const VideoPlayer = (props) => {
  const { muted, setMuteVideo, postFile, postYoutube, noBackground, controls = true, autoplay } = props;
  const [playing, setVideoPlay] = useState(false);

  useEffect(() => {
    if(autoplay) {
      setVideoPlay(true)
    }
  }, [autoplay])

  const scrollInfo = useWindowScroll();
  const windowDimensions = useWindowDimensions();

  const [day, setDay] = useState(true);


  const animate = () => {
    if(playing) {
      setVideoPlay(false)
    }
  };
  
  return (
    <div className={`${styles.videoWrapper} ${noBackground ? '' : styles.videoShadow}`}>
        
        {postYoutube && 
          <YoutubePlayer controls={controls}  onPlay={() => setVideoPlay(true)} playing={playing} muted={muted} postYoutube={postYoutube}  />}
        {postFile && 
             
          <ReactPlayer
              url={postFile}
              playing={playing}
              muted={muted}
              pip
              // className={styles.reactplayer}
              controls={controls}
              className={`${noBackground ? '' : 'bg-black' } min-w-fit `}
              height="auto"
              width="auto"
              onPlay={() => setVideoPlay(true)}
              // {...props}
            />
        }
      <AtomTrigger
          behavior={"leave"}
          scrollEvent={scrollInfo}
          callback={animate}
          dimensions={windowDimensions}
        />
    </div>
  );
};

export default VideoPlayer;
