import { Navigate } from "react-router-dom";
import { useState, useEffect}  from 'react'
import { useParams } from "react-router-dom";
import styles from './FicheLogement.module.scss'
import Carrousel from '../../components/Carrousel/Carrousel';
import LogementHeader from '../../components/LogementHeader/LogementHeader'
import HostNotation from '../../components/HostNotation/HostNotation'
import Collapse from '../../components/Collapse/Collapse'


const FicheLogement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
    fetch("/datas/logements.json")
        .then((res) => res.json())
        .then((data) => {
        const found = data.find((item) => item.id === id);
        setLogement(found);
        });
    }, [id]);

    if (logement === null) return null;
    
    if (logement === undefined) return <Navigate to="/error" />;
    

    return (
        <div className={styles.page}>
            <Carrousel pictures={logement.pictures}/>
            <div className={styles.infoLogement}>
                <LogementHeader 
                    title={logement.title}
                    location={logement.location}
                    tags={logement.tags}
                />
                <HostNotation
                    host={logement.host}
                    rating={logement.rating}
                />
            </div>
            <div className={styles.collapseContent}>
                <Collapse title="Description">
                    {logement.description}
                </Collapse>

                <Collapse title="Équipements">
                    {logement.equipments.map((eq, index) =>(
                        <li key={index}>{eq}</li>
                    ))}
                </Collapse>
            </div>
        </div>

    )

}

export default FicheLogement