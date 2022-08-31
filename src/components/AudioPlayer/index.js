import {
  AtomTrigger,
  useWindowDimensions,
  useWindowScroll
} from "react-atom-trigger";
import { useEffect, useState, useRef } from 'react';

const AudioPlayer = (props) => {
  const { src } = props;
  const audioRef = useRef(null)

  const scrollInfo = useWindowScroll();
  const windowDimensions = useWindowDimensions();

  const animate = () => {
    audioRef?.current?.pause()
  };
  
  return (
    <>
      <audio
        controls
        ref={audioRef}
        className='w-full'
        src={src}>
            Your browser does not support the
            <code>audio</code> element.
      </audio>
      <AtomTrigger
          behavior={"leave"}
          scrollEvent={scrollInfo}
          callback={animate}
          dimensions={windowDimensions}
        />
    </>
  );
};

export default AudioPlayer;
