import festin from '../../assets/img/festin2024.jpeg'
import imgEquipo from '../../assets/img/festin2024/equipoFestin2024.png'
import './Fest.css'

const Fest = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='agradecemos-box d-flex flex-column align-items-center text-center'>
        <h3>Agradecemos <span className='text-warning'>:</span></h3>
        <div className="agradecemos-text">
          <p>
            Como agrupación, nos enorgullecemos de nuestro equipo de trabajo, quienes,
            como un puñado de corazones e ideales unidos, dieron vida al Festín Sin Piedra 2024.
            Damos las gracias a cada uno de ellos y a todas las personas involucradas en esta ardua labor.
          </p>
          <p>
            Por todo el apoyo y compromiso,<span className='fw-bold text-success'> ¡GRACIAS TOTALES!</span>
          </p>
        </div>
        <img src={imgEquipo} alt="Equipo Festín 2024" className='agradecemos-img' />
      </div>

      <div className='fest-container d-flex flex-column align-items-center text-center'>
        <h3><span className='text-success'>"Festín sin Piedra"</span> 2024<span className='text-warning'>.</span></h3>
        <p>Se parte de todas nuestras actividades <span className='text-success fw-bold'>!</span> <span className='text-warning'>.</span></p>
        <img src={festin} alt="Festín" className='fest-image' />
      </div>
    </div>
  )
}

export default Fest
