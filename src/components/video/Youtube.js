
import { useEffect, useState } from 'react';

import { getLinkYoutue } from '@/utils/ultils';
import ReactPlayer from 'react-player'
import styles from './video.module.css';

const VideoPlayer = (props) => {
  const { muted, postYoutube, playing, controls, onPlay } = props; 

  return (
      <div className={styles.videoWrapper}>
        <ReactPlayer
          url={getLinkYoutue(postYoutube)}
          playing={playing}
          muted={muted}
          pip
          height="auto"
          width="auto"
          className={styles.youtubePlayer}
          controls={controls}
          onPlay={onPlay}
        />
      </div>
  );
};

export default VideoPlayer;
