import AktivitetCard from '@/components/aktivitet-card/aktivitet-card';
import './aktiviteter.scss';
import { CiSearch } from "react-icons/ci";
import Footer from '@/components/footer/footer';

export default async function Aktiviteter() {

    const response = await fetch('http://localhost:4000/api/v1/activities')
    const json = await response.json()

    return (
        <>
        <div className='wrapper'>
            <h2>Aktiviteter</h2>
            <div className="search">
                <input type="search" name="search" />
                <CiSearch size={30} />
            </div>
            <ul className='card'>
                {json.map(aktivitet => (
                    <li className='card__item' key={aktivitet.id}>
                        <AktivitetCard aktivitet={aktivitet} />
                    </li>
                ))}
            </ul>
        </div>
            <Footer/>
        </>
        
    )
}