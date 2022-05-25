import { useEffect, useState } from 'react';
import './Orologio.css'

function Orologio({ country }) {

    const date = new Date();
    const [stateInit, setDate] = useState(date);  
    useEffect(() => {
       setInterval(() => {
            const tempoaggiornato = stateInit.getTime()
            setDate(new Date(tempoaggiornato));
        },6000);
        return () => {
        }
    }, [stateInit]);

    return (
        <h2>In {country} è giorno {date.toLocaleDateString()} e sono le ore: {date.toLocaleTimeString()}</h2>
    );
}


export default Orologio;


