import { useRef, useEffect, useContext } from 'react'
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { DataContext } from '../../context/DataContext'
import videoPresentation from '../../assets/img/Festin sin Piedra 2020 OFICIAL.mp4'
import './Video.css'

const VideoList = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { videos, setVideos } = useContext(DataContext);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/video.json');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, [setVideos]);

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
      <div className="custom-videos d-flex flex-wrap justify-content-around">
      {videos.map((video) => (
        <Card key={video.id} className="card mb-3" style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title>{video.title}</Card.Title>
            <Card.Text>{video.description}</Card.Text>
            <Link to={video.urlVideo} target="_blank">
              <Button variant="primary">Enlace a Youtube</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default VideoList;
