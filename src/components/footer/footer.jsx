import { AiOutlineHome } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import './footer.scss'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link className="footer__container__home" href='/aktiviteter'>
                    <AiOutlineHome size={35} />
                </Link>
                <Link className="footer__container__calendar" href='/kalender-default'>
                    <CiCalendar size={35} />
                </Link>
            </div>
        </footer>
    )
}