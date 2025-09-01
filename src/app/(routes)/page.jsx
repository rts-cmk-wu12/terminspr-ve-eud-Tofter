import '../../components/scss/background.scss';
import '../../components/scss/button.scss';
import './velkommen.scss'

export default function Velkommen() {
  return (
    <>
      <div className='background'>
          <div className='title'>
            <p className='title__first'>landrup</p>
            <p className='title__second'>dans</p>
          </div>
        <div>
          <button className='button'>Kom i gang</button>
        </div>
      </div>
    </>
  );
}
