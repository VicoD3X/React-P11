import '../../App.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Slider from '../../components/Slider'
import StarRating from '../../components/StarRating';
import Dropdown from '../../components/Dropdown';
import NotFound from '../404/404';



const DetailPage = () => {
    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                const item = jsonData.find(item => item.id === id);
                if (!item) {
                    navigate('/404');
                    return;
                }
                setItemDetails(item);
            } catch (error) {
                console.error('Erreur lors du chargement des données:', error);
                setError(error);
            }
        };

        fetchData();
    }, [id, navigate]);

    if (error) {
        navigate('/404');
        return <NotFound />;
    }

    if (!itemDetails) {
        navigate('/404');
        return <NotFound />;
    }

    return (
        <>
            <div className='headerDetail'>
                {itemDetails.pictures && <Slider className='picsDetail' pictures={itemDetails.pictures} />}
                <div className='underDetail'>
                    <div className='containDetail1'>
                        <h1 className='titleDetail'>{itemDetails.title}</h1>
                        <p className='locationDetail'>{itemDetails.location}</p>
                        <div className='tagsContainer'>
                            {itemDetails.tags.map((tag, index) => (
                                <span key={index} className='tag'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                    <div className='containDetail2'>
                        <div className='profilContainer'>
                            <h2 className='nameDetail'>{itemDetails.host.name}</h2>
                            <img className='profilDetail' src={itemDetails.host.picture} alt="Host Profile" />
                        </div>
                        <div className='starsDetail'>
                            <StarRating rating={itemDetails.rating} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown-container">

                <Dropdown title="Description" titleClass="dropdown-title">
                    <div className='dropdown-item'>
                        <span className='dropdescription-title'>{itemDetails.description}</span>
                    </div>
                </Dropdown>



                <Dropdown title="Équipements" titleClass="dropdown-title">
                    {itemDetails.equipments.map((equipment, index) => (
                        <div key={index} className='dropdown-item'>
                            <span className='dropitem-title'>{equipment}</span>
                        </div>
                    ))}
                </Dropdown>
            </div>


        </>

    );


};

export default DetailPage;



