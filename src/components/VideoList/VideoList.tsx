import { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';
import './VideoList.css';

const VideoList = () => {
  const { videos, setVideos } = useContext(DataContext);



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
    <div className="video-list-container">
      <div className='d-flex text-center justify-content-center mt-3'>
        <h3>
          En vísperas de nuestro festín sin piedra 2024 <br />  Recordamos a algunos grandes del 2020
        </h3>
      </div>
      <div className="custom-video d-flex">
        {videos.map((video) => (
          <div key={video.urlVideo} className="video-item">
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.urlVideo}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className='video-body d-flex flex-column mt-2'>
              <div className='video-text'>
                <h2 className='text-center'>{video.title}</h2>
                <p>{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
