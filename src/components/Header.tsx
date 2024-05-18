import { Link } from 'react-router-dom';
import Logo from '../../public/logo.svg';
import bookmark from '../icons/bookmark.svg'
import catalogue from '../icons/catalogue.svg'
import { LinkNav } from './LinkNav';

export const Header = () => {
    return (
        <header className='flex flex-row gap-x-4 px-10 py-4 md:py-5 justify-between bg-baby-blue border solid border-b-gray-900/30'>
            <Link to="/">
            <img src={Logo} alt='ReadUs Logo' className='cursor-pointer'/>
            </Link>
            
            <div className='flex flex-rown gap-x-8'>
            <LinkNav name='Mis libros' icon={bookmark} href='/mybooks'/>
            <LinkNav name='Catálogo' icon={catalogue} href='/'/>
            </div>
        </header>
    )

}