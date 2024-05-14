import { Container } from 'react-bootstrap'
import { assets } from '../../assets/assets'
import './Relatos.css'


export const Relatos = () => {
  return (
    <div className='encabezado-relatos'>
        <h1>RELATOS</h1>
        <p>Un poco más cerca de nuestra Historia.
        Es un espacio de visualización y aprendizaje en donde los descendientes de nuestros antepasados, nos enseñan y transmiten sus conocimientos, sentimientos y legados....
        Nuestros apellidos, Alape, Capera, Tique, Cupitra, Cutivá, es decir Pijaos nos recuerdan a los antiguos mohanes, destacados por su inmenso valor e inteligencia, su gallardía y honor de guerreros. Famosos y temidos durante la colonia temprana por salir victoriosos en la defensa de su territorio por más de 60 años.
        </p>
        <img className='group29_1' src={assets.group29} alt="" />
        <p>📜En su 2 Entrega, RELATOS, (Un poco mas cerca de nuestra Historia), un espacio de visualización de CHAMBIMBE</p>
        <p>📌Nos entrega, un Documental en 6 Capítulos, en los cuales nos muestra toda la idiosincrasia de la provincia Sur de Nuestro departamento, en los cuales  podremos observar su identidad, cultura, costumbres, artesanías, mitología, problemáticas sociales, entre mas. </p>
        <p>NO TE LO PIERDASSS, todos los viernes iniciando este 26 de Abril del 2024, con el capitulo 1 (Territorio, un legado) !!!.🕐📣
        Nos Sentimos muy orgullosos de ser pueblo Pijao, Caney Caney...</p>

        <img src={assets.relatos} alt="" className='relatos_3'/>


        <h1>TRAILER PRMER CAPITULO</h1>

        <Container className='youtube-container'>
            <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/E-8tKvlI2Kk?si=2ellZcqNIf2HC0Eg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>

        <h1>PRMER CAPITULO</h1>

        <Container className='youtube-container'>
            <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/-ohMNqoRBk4?si=OmFIemKlU2ewg_Nn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>

        <h1>TRAILER SEGUNDO CAPITULO</h1>

        <img src={assets.relatos_2} alt="" className='relatos_3'/>

        <Container className='youtube-container'>
            <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/Mqiu3boiQm0?si=3dLau7KTsTDCoZCt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>

        <h1>SEGUNDO CAPITULO</h1>

        <Container className='youtube-container'>
            <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/4FVgHxUiUxI?si=DltXc5hkGDfRucL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Container>

        <h1>TERCER CAPITULO</h1>
        
        <img src={assets.relatos_3} alt="" className='relatos_3'/>

    </div>
  )
}
