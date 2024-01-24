// Card.jsx
import '../../src/App.css';
import footerimg from '../../src/pictures/footer.png'

function footer() {
    return (
        <>
            <footer>
                <img src={footerimg} alt='footer' className='footerImg'></img>
                <p className='footerTitle'>© Kasa. All rights reserved</p>
            </footer>
        </>
    )
}

export default footer;