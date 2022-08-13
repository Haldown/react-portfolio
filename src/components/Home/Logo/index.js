import './index.scss';
import LogoA from '../../../assets/images/LogoA.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoA} alt='A' />
        </div>
    )
}

export default Logo;