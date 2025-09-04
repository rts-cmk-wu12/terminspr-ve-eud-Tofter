import Link from 'next/link';
import '../../components/scss/background.scss';
import '../../components/scss/button.scss';
import './velkommen.scss';

export default function Velkommen() {
  return (
    <>
      <div className='background'>
        <div className='title'>
          <p className='title__first'>landrup</p>
          <p className='title__second'>dans</p>
        </div>
        <div className='background__block'></div>
        <Link href='/aktiviteter' className='button-link'>Kom i gang</Link>
      </div>
    </>
  );
}
