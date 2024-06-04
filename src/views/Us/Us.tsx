import { Description, Cards, Video } from "../../components"
import './Us.css'


const Us = () => {

  return (
    <div className="container-us">
      <Description />
      <Video />
      <div className="gallery-cards">
      <i className="fa-solid fa-arrow-down-wide-short text-warning"></i>
        <Cards />
      </div>
    </div>
  )
}

export default Us