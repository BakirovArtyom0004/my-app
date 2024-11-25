import './Header.css'
import { NavLink } from 'react-router-dom';
export function Header(){
    return(
        <div className="header">
            <h1>Флэш-карточки</h1>
            <nav>
                <ul className='main-nav'>
                    <li>
                        <NavLink to="/" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin" className={ ({isActive}) => (isActive ? 'link link--active':'link')}>Создание новых сетов</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}