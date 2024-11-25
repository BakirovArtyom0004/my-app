import { BtnSet } from "../../components/btnSet/BtnSet";
import {Header} from "../../components/header/Header";
import "./PageSelectSet.css"

export function PageSelectSet(){
    const cards = require("../../data.json");
    const sets = cards.reduce(
        (acc, item)=>
        {
            if(acc.obj[item.setName])
                return acc;
            acc.obj[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            obj:{},
            sets:[]
        }
    ).sets.map((item, index)=>(
        <BtnSet key={index} name={item} id={index} />
    ));

    return (
        <div>
            <Header />
            <h2>Наборы (сеты) карточек</h2>
            <ul className="set-list">
                {sets}
            </ul>
        </div>
    )
}