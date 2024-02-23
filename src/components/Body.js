import RestroCards from "./RetroCards";
import restroCards from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [items,setItems]= useState(restroCards);

    updateUI = () => {
        setItems(items.filter(item=>item.info.avgRating > 4.5));
    }
    return(
        <div className='body'>
            <div className='filter'>
                <button onClick={updateUI}>Filter 4.5 stars</button>
            </div>
            <div className='hotels'>
                {
                    items.map((item) => <RestroCards  key={item.info.id} restroData={item}/>)
                }
            </div>
        </div>
    )
}
export default Body;