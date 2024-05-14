import './ArtesPlasticas.css'
import { Proyectos } from '../../../components/ProyectosMenu/ProyectosMenu'
import { assets } from '../../../assets/assets'
import { Container } from 'react-bootstrap'

export const ArtesPlasticas = () => {
  return (
    <div>
        <Proyectos/>
        <div className="encabezado-artes">
            <h1>ARTES PLASTICAS</h1> 
            <img className='grupo27' src={assets.group27} alt="" />
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                 <iframe width="1263" height="671" src="https://www.youtube.com/embed/Z90lg4WVCRE?si=Vm1gz9MtCZMKCNTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>

            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                 <iframe width="1263" height="671" src="https://www.youtube.com/embed/OwbRgvHHcP4?si=NcG8Z17_FxeZZvzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>

            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                 <iframe width="1263" height="671" src="https://www.youtube.com/embed/yegN5OnlX8k?si=L7T_t_PJDyJOQPWl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>

            <h1>AGRADECIMIENTO</h1> 

            <div className="agradecimientoAlejandra">
              <img className='alejandra' src={assets.alejandra} alt="" />
              <div className="agradecimientoAlejandra2">
                  <h2>ALEJA GARCIA</h2>
                  <p>TALLERISTA EN ARTES PLASTICAS. COLECTIVO CULTURAL. CHAMBIMBE.</p>
                  <a href="https://www.facebook.com/shirleyalejandra.garciachavez.1" target="_blank">
                      <img src={assets.facebook_icon_black} alt='icon' className='iconAleja' align='center' />
                  </a> 
              </div>
            </div>
        </div>
    </div>
  )
}
