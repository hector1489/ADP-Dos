import { Description, Cards, Video } from "../../components"
import './Us.css'


const Us = () => {

  return (
    <div className="container-us">
      <Description />
      <Video />
      <div className="gallery-cards">
        <Cards />
      </div>
    </div>
  )
}

export default Us