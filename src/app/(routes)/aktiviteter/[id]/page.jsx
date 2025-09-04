import Image from "next/image";
import '../../../../components/scss/button.scss';
import './aktivitet-detaljer.scss';
import Footer from "@/components/footer/footer";

export default async function AktivitetDetails({ params }) {
    const { id } = await params

    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const json = await response.json()
    console.log(json);


    return (
        <>
            <div className="image-container">
                <Image className="image-container__image" src={json.asset.url} width='411' height='489' alt={json.name}></Image>
                <button className="button">Tilmeld</button>
            </div>
            <div className="details-container">
                <div className="details-container__heading-container">
                    <h2 className="details-container__heading-container__heading">{json.name}</h2>
                    <p className="details-container__heading-container__text">
                        <span>{json.minAge}-</span>
                        <span>{json.maxAge} år</span>
                    </p>
                </div>
                <p className="details-container__description">{json.description}</p>
            </div>
            <Footer/>
        </>
    )
}