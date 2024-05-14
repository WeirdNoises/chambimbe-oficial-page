import './Balonki.css'
import { Proyectos } from '../../../components/ProyectosMenu/ProyectosMenu'
import { assets } from '../../../assets/assets'
import { Container } from 'react-bootstrap'

export const Balonki = () => {
  return (
    <div>
        <Proyectos/>
        <div className="encabezado-balonki">
            <h1>BALONKI</h1> 
            <h2>POR LOS SENDEROS DE COLOMBIA</h2> 
            <h1>TRAILERS</h1> 
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/im4usbkGl2w?si=79G6jR3UAmNmznYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/jD1bV4QfYZ8?si=HnGI_HmmxraBq-ap" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/ppRUeHLv6AU?si=bVuv_ZEWcNcLBcYf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <a>
              El desarrollo de la obra se basa en un relato de inspiración sobre la vida cotidiana de las campesinos y los grupos armados de la zonza,  una lavandera de los  municipios de Coyaima, Icononzo, Ataco y planadas Tolima, Balonki quien nació, creció y convivió en este pueblo, junto a su familia amorosa conformada por su Taita (padre), quien es un pescador, un hombre conocedor del río, lleno de historias, de dichos, de retahílas, de cuentos de espantos y aparecidos, y por supuesto conocedor de las historias que suben y que bajan por las lágrimas del río. Por otro lado, Aima su madre, una mujer dedicada a hacer chicha para venderla en la plaza del pueblo, en el parque y en días de fiesta de San Juan. El contexto geográfico nos transporta a un pueblo aledaño al río, donde los campesinos mantienen una relación directa con este ser natural, ya que los dota, de alimento, de recurso hídrico y les facilita el desarrollo de sus oficios. Sin embargo, en la obra se pretende resaltar el papel fundamental de la mujer y de las lavanderas y la idiosincrasia tolimense quienes afrontan todos estos problemas socioculturales, con mucho valor, fortaleza y empoderamiento de este referente femenino en la sociedad. Adicionalmente que en el caso de Coy un apoyo sobrenatural y místico proveniente de sus raíces y de su identidad ancestral. Desde una perspectiva técnica, la obra se divide en 5 actos, donde en cada uno de ellos hace énfasis a un aparte de la vida de: • Acto 1 “Narración Coy”: En este primer acto se pretende generar el ambiente de oficio de las lavanderas a la orilla del río, y en su desarrollo plantear una incógnita, la cual nos servirá para poder desenlazar la obra sobre lo que va a suceder relacionado a su oficio y el río. Seguidamente se busca describir el contexto geográfico donde tiene desarrollo la obra denotando la identidad del pueblo. Por consiguiente, también se describe el oficio del padre de Coy en su ambiente de pescador, Acto 2 “Recuerdo Ancestral”: A mitad de la obra, podemos evidenciar la conexión de sus raíces, sus antepasado y orígenes generando una atmósfera mística ancestral e indígena; en el desarrollo de esta conexión, Aima tiene un acercamiento a su niñez y plasma sus recuerdos de infancia dentro de la exploración de su memoria. Acto 2 “la Chica de quien es”: donde se muestra esta bebida tradicional desde nuestros abuelos taitas, dando un relato de superación y intercambio cultural hablando desde las bebidas tradicionales de nuestro territorio.
            </a>
            <h1>OBRAS</h1> 
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/AyhBaUOZl-M?si=pUQlEYa-ONVyLbg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/V_bURJpwaRY?si=fdBYEIHysocokpEX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <Container className='youtube-container'>
              <div className="ratio ratio-16x9">
                <iframe width="1263" height="671" src="https://www.youtube.com/embed/4pYJRM7OC9M?si=q_AkF5anxTJYtOHX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Container>
            <img src={assets.group26} alt="" />
        </div>
    </div>
  )
}
