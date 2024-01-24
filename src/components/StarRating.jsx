import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const starIcons = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starIcons.push(<FontAwesomeIcon icon={faStar} key={i} className='starsIcon' />);
        } else {
            starIcons.push(<FontAwesomeIcon icon={faStar} key={i} className='starsIcon' style={{ color: 'lightgray' }} />);
        }
    }

    return <div>{starIcons}</div>;
};

export default StarRating;