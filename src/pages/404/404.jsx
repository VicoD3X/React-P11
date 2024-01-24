import '../../App.css';
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='contain404'>
            <h1 className='title404'>404</h1>
            <p className='p404'>oups ! , la page que vous cherchez n'existe pas.</p>
            <Link to='/accueil' className='link404'>Retourner sur la page d'acceuil</Link>
        </div>
    );
}

export default NotFound;