import Image from "next/image";
import Link from "next/link";
import './aktivitet-card.scss';

export default async function AktivitetCard({ aktivitet }) {

    return (
        <Link className="aktivitet" href={`/aktiviteter/${aktivitet.id}`}>
                <div className="aktivitet__box">
                    <h3 className="aktivitet__box-title">{aktivitet.name}</h3>
                    <div className="aktivitet__box__container">
                        <p>{aktivitet.minAge}</p>
                        <span>-</span>
                        <p>{aktivitet.maxAge} år</p>
                    </div>
                </div>
                <Image src={aktivitet.asset.url} width='200' height='200' alt=""></Image>
        </Link>
    )
}