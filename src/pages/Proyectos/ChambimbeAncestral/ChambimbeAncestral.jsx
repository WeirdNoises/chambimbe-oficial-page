import './ChambimbeAncestral.css'
import { Proyectos } from '../../../components/ProyectosMenu/ProyectosMenu'
import { assets } from '../../../assets/assets'
import { Container } from 'react-bootstrap'

export const ChambimbeAncestral = () => {
  return (
    <div>
        <Proyectos/>
        <div className="encabezado">
            <h1>CHAMBIMBE ANCESTRAL</h1> 
            <img className='group21' src={assets.group22} alt=""  />
            <a>CHAMBIMBE ANCESTRAL, es un proyecto de formación manufacturera desde la enseñanza de las prácticas del arte práctica, tejidos, hilados y moldeados, donde de una manera sin animo de lucro se forman individuos en todas las etapas de la vida, para el emprendimiento y creación de microempresas y proyectos productivos individuales y colectivos en las comunidades beneficiadas. Es así que los contenidos lúdicos y prácticos desde el tejido de palmiche real, tejido de cestería, moldeado en alfarería, hilados en la mostacilla, dibujo en lápiz carboncillo, dejan un aprendizaje continuo y de sostenimiento socioeconómico en comunidades vulneradas por los flagelos armados, alteración a los derechos humanos y el transcender del tiempo, dando así un sentido de pertenencia y un nuevo comienzo de proyectos de vida, donde la cultura, el arte, el buen convivir y los procesos de paz son los abanderados.</a>
            <img className='logo2' src={assets.chambimbeAncestral} alt="" />
            <img className='group23' src={assets.group23} alt=""  />
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/Et-SlmCTsrQ?si=hAJsAXeeRo1uCLwS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            </div>
    </div>
  )
}
