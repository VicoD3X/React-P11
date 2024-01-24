
import '../../App.css';
import aboutDisplay from '../../pictures/aboutDisplay.png';
import Dropdown from '../../components/Dropdown';

function About() {
    return (
        <>
            <div className='displayContainer'>
                <img src={aboutDisplay} alt='aboutDisplay' className='headerDisplay' />
                <p className='titleDisplay'>A Propos</p>
            </div>

            <div className='bodyAbout'>
                <div className="dropdown-containerAbout">
                    <Dropdown title="Fiabilité" titleClass="dropdown-title">
                        <div className='dropdown-item'>
                            <span className='dropdescription-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis perferendis iusto delectus minus, incidunt maxime ducimus alias? Totam vero fugiat libero, soluta blanditiis inventore impedit quibusdam cumque animi iste!.</span>
                        </div>
                    </Dropdown>

                    <Dropdown title="Respect" titleClass="dropdown-title">
                        <div className='dropdown-item'>
                            <span className='dropdescription-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit tenetur reprehenderit quo molestiae minima laboriosam, in adipisci dolor? Vero doloremque delectus esse atque odit eaque vel eos, veritatis pariatur aut?</span>
                        </div>
                    </Dropdown>

                    <Dropdown title="Service" titleClass="dropdown-title">
                        <div className='dropdown-item'>
                            <span className='dropdescription-title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam culpa incidunt minima vel necessitatibus unde quibusdam error. Saepe adipisci cupiditate dolorum dolores perspiciatis accusantium quibusdam, voluptates totam rerum iure voluptas.</span>
                        </div>
                    </Dropdown>

                    <Dropdown title="Sécurité" titleClass="dropdown-title">
                        <div className='dropdown-item'>
                            <span className='dropdescription-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempore quae nobis inventore consectetur facilis maiores delectus sit perferendis. Temporibus sint laboriosam sapiente. Magnam ea ratione nisi ab veritatis ullam.</span>
                        </div>
                    </Dropdown>
                </div>
            </div>
        </>
    );
}

export default About;
