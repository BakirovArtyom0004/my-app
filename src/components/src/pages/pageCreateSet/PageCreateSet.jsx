import {Header} from "../../components/header/Header";
import { Outlet, NavLink } from "react-router-dom";
import "./PageCreateSet.css";
export function PageCreateSet(){
    return (
        <div>
            <Header/>
            <h2>Создание сета карточек</h2>
            <nav>
<NavLink 
    to="createset" 
className={ ({isActive}) => (isActive ? 'link link--active':'link')}>
    Создать сет
</NavLink>
<NavLink 
    to="createcard" 
className={ ({isActive}) => (isActive ? 'link link--active':'link')}>
    Создать карточку
</NavLink>
            </nav>

            <Outlet />
            
            <p>&copy; Мухина Ю.Р.</p>
        </div>
    )
}