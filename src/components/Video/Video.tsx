import { useRef, useEffect } from 'react'
import videoPresentation from '../../assets/img/Festin sin Piedra 2020 OFICIAL.mp4'
import './Video.css'

const VideoList = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handlePlay)

    return () => {
      document.removeEventListener('click', handlePlay)
    }
  }, [])


  return (
    <div className="video-container mt-5">
      <div className='video-container-title d-flex text-center justify-content-center mt-3'>
        <h3 className='p-3'>
          En vísperas de nuestro <span className='text-success'>Festín Sin Piedra</span> 2024 <span className='text-warning'>,</span> <br /> recordamos a algunos grandes del 2020 <span className='text-danger'>.</span>
        </h3>
      </div>
      <div className="p-5">
        <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
          <source src={videoPresentation} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoList;
