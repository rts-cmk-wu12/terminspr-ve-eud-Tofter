import AktivitetCard from '@/components/aktivitet-card/aktivitet-card';
import './aktiviteter.scss';

export default async function Aktiviteter() {

    const response = await fetch('http://localhost:4000/api/v1/activities')
    const json = await response.json()
    console.log(json);
    


    return (
        <div className='wrapper'>
        <h2>Aktiviteter</h2>
        <ul className='card'>
           {json.map(aktivitet => (
            <li className='card__item' key={aktivitet.id}>
                <AktivitetCard aktivitet={aktivitet}/>
            </li>
        ))} 
        </ul>
        </div>
    )
}