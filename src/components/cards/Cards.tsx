import { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import { DataContext } from '../../context/DataContext'
import videoJson from '../../video.json'

const CardsList = () => {
  const { videos, setVideos } = useContext(DataContext);

  useEffect(() => {
    setVideos(videoJson);
  }, [setVideos]);

  return (
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
  );
};

export default CardsList;
