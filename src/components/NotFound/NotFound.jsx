import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
  return (
    <div className="not-found">
        <h1>404</h1>
         <h2>Pagina no encontrada</h2>
         <Link to='/'>Volver a la pagina principal...</Link>
     </div>
  )
}
