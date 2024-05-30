import { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import { DataContext } from '../../context/DataContext'
import videoJson from '../../video.json'
import './Cards.css'

const CardsList = () => {
  const { videos, setVideos } = useContext(DataContext);

  useEffect(() => {
    setVideos(videoJson);
  }, [setVideos]);

  return (
    <div className="container-cards">
      {videos.map((video) => (
        <Card key={video.id} className="card mb-3">
          <Card.Img variant="top" src={video.image} alt={video.title} className="card-img-top" />
          <Card.Body className='text-white text-center'>
            <Card.Title>{video.title}</Card.Title>
            <Card.Text>{video.description}</Card.Text>
            <Link to={video.urlVideo} target="_blank" className='d-flex justify-content-center'>
              <Button variant="primary">Enlace a Youtube</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default CardsList
