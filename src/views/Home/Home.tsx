import { IntroGallery, Fest } from '../../components/index'
import './Home.css'

const Home = () => {

  return (
    <div>
      <section>
      <IntroGallery />
      </section>
      <section>
      <Fest />
      </section>
      <div className="Home-arrow d-flex mt-2">
        <a href="#top" className="Home-icon m-2">
        <i className="fa-sharp fa-solid fa-angles-up fa-beat-fade fa-2x"></i>
        </a>
      </ div>
    </div>
  )
}

export default Home