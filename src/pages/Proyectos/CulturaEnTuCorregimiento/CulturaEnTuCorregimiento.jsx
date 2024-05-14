import './CulturaEnTuCorregimiento.css'
import { Proyectos } from '../../../components/ProyectosMenu/ProyectosMenu'
import { assets } from '../../../assets/assets'
import { Container } from 'react-bootstrap'

export const CulturaEnTuCorregimiento = () => {
  return (
    <div>
        <Proyectos/>
        <div className="encabezado">
            <h1>CULTURA EN TU CORREGIMIENTO</h1> 
            <a>Es un proyecto formativo con una experiencia pedagógica en la educación artística de 3 años, busca seguir fortaleciendo e impactando de manera transcendental las comunidades de los municipios y zonas veredales del departamento del Tolima  tejiendo lazos sociales entre estas comunidades que en su mayoría no cuentan con procesos formativos en educación artística, desde la danza, la plástica, la música y las prácticas de tejidos ancestrales, pretendiendo que contribuyan a transcender e implementar la óptima participación del mismo y la ocupación optima del tiempo libre. El arte es una ventana de oportunidades e infusión para la niñez, y la juventud, donde se procura que el buen uso del tiempo libre sea implementado en actividades sanas de fortalecimiento mental, corporal y espiritual, el cual ayude a disminuir problemáticas como lo son; los embarazos a temprana edad, consumo de sustancias psicoactivas, trabajo forzoso en primera infancia y por ultimo y no menos a la explotación sexual en nuestra niñez, conocemos de primera mano que en estos municipios céntricos y del sur del departamento junto a sus zonas veredales, los cuales están categorizados, en categoría 5 y 6; por ser entes viales al centro del país, se dan estas y demás prácticas que van en contra de los derechos de nuestros niños y jóvenes, que el arte sea ese espacio de integración, tolerancia, respeto, aceptación, reconocimiento, reconciliación y de cultura para la paz, ya que puede lograr sensibilizar al ser humano y lo hace mejor persona. Científicamente está comprobado que las diferentes expresiones artísticas en toda su dimensión ayuda y contribuye significativamente en el desarrollo del ser humano desde temprana edad, e incluso desde la etapa prenatal, es por esto que este proyecto tiene el propósito de fortalecer mediante el proceso de formación informal en las ramas anteriormente mencionadas del arte, al desarrollo cognitivo, motriz, psicosocial y cultural de estas comunidades fortalecimiento así a una ciudadanía capaz de dialogar, deliberar y tomar decisiones, junto a la reconstrucción de los lazos sociales y la visibilización de los efectos del conflicto armado, donde se formen eficazmente y palatinamente individuos con conocimientos culturales hablando intelectualmente, donde los valores culturales que se encuentran en decadencia, sean y sirvan como herramienta para la enseñanza y apropiación, es así donde se pretende que a futuro aporten de una u otra forma un papel fundamental en la transformación de nuestra realidad local, municipal y nacional, tan marcada por la exclusión y as heridas de múltiples violencias.Por último, la necesidad y supervivencia de stas comunidades tan lejanas de las grandes capitales o ciudad principales, nos uestran el lado más humano y sensible, por ende, el proyecto brinda atravez e conocimientos y contenidos en tejidos ancestrales, (tejido de cestería, provechamiento del capacho del maíz y tejidos de materiales naturales), niciativas donde los beneficiarios del mismo, obtienen las herramientas y prendizajes necesarios para formar emprendimientos que ayuden al ostenimiento de las mismas y sus núcleos familiares, que por estadísticas erritoriales son conformados por 6 o más integrantes por familia. Donde la ecuperación escalonada de la economía pos- pandemia y conflictos sociales desplazamiento forzado, enfrentamiento de grupos ilícitos, entre otras); han ejado sin número de secuelas y adversidades a estas familias.</a>
            <img className='logo-cultura2' src={assets.arte_cultural} alt="" />
            <img className='group21' src={assets.group21} alt=""  />
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/dkNUo20KOj8?si=Rov5rZpCvfjJ2WKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
        </div>
    </div>
  )
}
