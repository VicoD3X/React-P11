import '../../src/App.css'
import logo from '../../src/pictures/logo.png'
import { Link } from 'react-router-dom';

function header() {
    return (
        <>
            <div className='headerContainer'>
                <Link to='/accueil'>
                    <img src={logo} alt='logo' className='logo'></img>
                </Link>
                <div className='headerNav'>
                    <Link to='/accueil' className='navTitle'>Accueil</Link>
                    <Link to='/a-propos' className='navTitle'>A Propos</Link>
                </div>
            </div>
        </>
    )
}

export default header;