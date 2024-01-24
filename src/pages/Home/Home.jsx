// Home.jsx
import React, { useState, useEffect } from 'react';
//import data from '../../data/data.json'; 
import Card from '../../components/Card'; // 
import headerDisplay from '../../pictures/mainH.png';



function Home() {
    // Ajouter un état pour stocker les données récupérées
    const [data, setData] = useState([]);

    // Ajouter un effet pour charger les données
    useEffect(() => {
        fetch('data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.error('Erreur lors du chargement des données:', error);
            });
    }, []); // Un tableau de dépendances vide signifie que l'effet ne s'exécute qu'au montage

    return (
        <>
            <div className='displayContainer'>
                <img src={headerDisplay} alt='headerDisplay' id='headerDisplay' className='headerDisplay' />
                <p className='titleDisplay'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='locatContainer'>
                <div className='locatUndercontainer'>
                    {/* Utiliser l'état 'data' pour afficher les cartes */}
                    {data.map((item, index) => (
                        <Card key={index} id={item.id} title={item.title} cover={item.cover} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;

