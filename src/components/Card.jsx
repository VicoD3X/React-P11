// Card.jsx
import '../../src/App.css';
import { Link } from 'react-router-dom';


function Card({ id, title, cover }) {
    return (
        <>

            <div className='locatCard'>
                <Link to={`/Detail/${id}`}>
                    <div className="image-containerHome">
                        <img src={cover} alt={title} className='testimg' />
                        <div className='GradientOpacity'></div>
                    </div>
                    <p className='locatName'>{title}</p>
                </Link>
            </div>

        </>
    );
}

export default Card;
