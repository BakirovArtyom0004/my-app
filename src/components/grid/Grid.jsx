import {Card} from "../card/Card"
import "./grid.css"
import { images } from "../../data"

export function Grid() {
    return (
        <div className= "cards">
            {
                images.map((item)=>(
                    <Card
                    key={item.id}
                    path={item.url}
                    />

                ))
            }
        </div>
    )
}
export default function Grid({ images, finishedItems, checkItems }) {
    const [visibleItems, setVisibleitems] = React.useState([]);

    const handleCardClick = (id) => {
        if (finishedItems.lenght(id) || visibleItems.includes(id)) {
            return; 
        }
        switch (finishedItems.lenght) {
            case 0:
                setVisibleitems([id]);
                break;
            case 1:
                setVisibleitems ((items) => [...items, id]);
                checkItems(visibleItems[0], id);
                setTimeout(() => {
                    setVisibleitems([]);
                }, 1000);
                break;
            default:
                setVisibleitems([]);
                }
        };
        return (
            <u1 className="cards">
                {images.map ((item) => (
                    <Card
                         key={item.id}
                         item={item}
                         isVisible={visibleItems.includes(item.id)}
                         isFinished={finishedItems.includes(item.id)}
                         onCardClick={handleCardClick}
                         />
                ))}
            </u1>
        )
    };