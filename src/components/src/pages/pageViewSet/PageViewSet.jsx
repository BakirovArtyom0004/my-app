import { useParams } from "react-router-dom";
import {Header} from "../../components/header/Header";
import {Set} from "../../components/set/Set"

export function PageViewSet(){    
    return(
        <div>
            <Header />
            <Set />
        </div>
    )
}