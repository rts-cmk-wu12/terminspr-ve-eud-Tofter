import Footer from '@/components/footer/footer';
import './kalender.scss';

export default async function KalenderDefault() {

    const response = await fetch('http://localhost:4000/api/v1/activities')
    const json = await response.json()
    console.log(json);


    return (
        <>
            <h1 className='heading'>Kalender</h1>
            <div className='kalender'>
                {json.map(kalender => (
                <div key={kalender.id} className='kalender__container'>
                    <h2>{kalender.name}</h2>
                    <p>
                        <span>{kalender.weekday}</span>
                        <span>{kalender.time}</span>
                    </p>
                </div>
            ))}
            </div>
            <Footer/>
            
        </>
    )
}