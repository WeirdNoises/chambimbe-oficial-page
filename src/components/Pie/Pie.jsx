import { assets } from '../../assets/assets'
import './Pie.css'

export const Pie = () => {
  return (
    <div className="pie-pagina">
        <div className="pie-pagina-content">
            <div className='pie-pagina-top-left'>
                <div className="top">
                    <img src={assets.logo_original} alt='logo' className='logo' />
                    <div className="pie-pagina-top-left-texts">
                        <h1 className='navbar-title'>CHAMBIMBE</h1>
                        <h1 className='navbar-title'>COLECTIVO CULTURAL</h1>
                        <p className='navbar-title'>TRANSFORMANDO TERRITORIOS PARA LA PAZ Y LA EDUCACION</p>
                    </div>
                </div>
                <div className="bottom">
                    <a href="https://www.facebook.com/chambimbe.colectivo.cultural" target="_blank">
                        <img src={assets.facebook_icon} alt='icon' className='icon' align='center' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCT-_4L5NIU69FB027fyHNGg" target="_blank">
                        <img src={assets.youtube_icon} alt='icon' className='icon' align='center' />
                    </a>
                </div>
            </div>
            <div className='pie-pagina-top-right'>
                <h1>CONTACTANOS</h1>
                <div className='pie-list'>
                      <img src={assets.gmail_icon} alt='icon' className='icon' align='center' />
                      <a className='navbar-title'>chambimbetransformando@gmail.com</a>
                  </div>
                  <div className='pie-list'>
                     <img src={assets.lugar_icon} alt='icon' className='icon' align='center' />
                      <a className='navbar-title'>Calle 11B # 86-64 Barrio Centro, Ataco, Tolima</a>
                </div>
                <div className='pie-list'>
                        <img src={assets.whatsapp_icon} alt='icon' className='icon' align='center' />
                    <a className='navbar-title'>(+57) 315 6090833</a>
                </div>
            </div>
        </div>
        
        <p>Copyright 2024 CHAMBIMBE COLECTIVO CULTURAL</p>
    </div>
  )
}
