import { Description, Cards, Video } from "../../components"
import './Us.css'


const Us = () => {

  return (
    <div className="d-flex flex-column justify-content-center m-3 gap-4">
      <Description />
      <Video />
      <div className="gallery-cards">
        <Cards />
      </div>
    </div>
  )
}

export default Us