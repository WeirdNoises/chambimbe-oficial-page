import './TallerTeoricoPractico.css'
import { Proyectos } from '../../../components/ProyectosMenu/ProyectosMenu'
import { assets } from '../../../assets/assets'
import { Container } from 'react-bootstrap'

export const TallerTeoricoPractico = () => {
  return (
    <div>
        <Proyectos/>
        <div className="encabezado">
              <h1>TALLER TEORICO PRACTICO</h1> 
              <Container className='youtube-container'>
                <div className="ratio ratio-16x9">
                  <iframe width="1263" height="671" src="https://www.youtube.com/embed/JtnsccOBgtA?si=y1GyTR0qGCi_VUu6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </Container>
              <a> Nuestro Proyecto formativo en Costumbres y Tradiciones de nuestro departamento (Tolima); en su 1 Versión a nivel nacional tuvo una participaron de 180 personas entre Bailarines, Gestores Culturales, directores y Coordinadores de cultura, de los municipios de Madrid, Sibaté, Granada, pasca (Cundinamarca), Tunja, Sogamoso, Paipa, Duitama, (Boyacá), Andalucía (Valle del cauca), y Piedecuesta (Santander).
              </a>
              <a>Visualizándose como un proyecto abanderado y de gran impacto en estas comunidades alejadas de nuestro departamento, de una manera multidisciplinar atravez de la Danza Folclórica, Saberes y legados, se mostró lo inmenso y enriquecedor de nuestro territorio en su folclor.
              </a>
              <a>
              Sus contenidos teóricos en la danza folclórica de nuestro tolimense, la idiosincrasia de los ritmos como la caña, el bambuco, el san juanero y las rejaleñas, dejando una enseñanza práctica en los partícipes del mismo.
              </a>
              <img className='group24' src={assets.group24} alt=""  />
              <h1>AGRADECIMIENTOS</h1> 
              <img className='group25' src={assets.group25} alt=""  />
        </div>
        <img className='ttp' src={assets.tallerTeoricoPractico} alt=""  />
    </div>
  )
}
