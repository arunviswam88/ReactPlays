import { useEffect, useState } from "react";
import { REST_MENU } from "../utils/env";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
    const [restroMenu,setRestroMenu] = useState(null);
    const { restroID } = useParams();
    useEffect( ()=> {
        fetchMenu();
    },[]);

    fetchMenu = async () => {
        const menu = await fetch(REST_MENU+restroID);
        const menuJSON = await menu.json();
        setRestroMenu(menuJSON); 
    }

     if(restroMenu === null) return (<Shimmer />)

     const {name,cuisines,costForTwoMessage} = restroMenu?.data?.cards[0]?.card?.card?.info;
     const { itemCards } = restroMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <div><h2>{name}</h2></div>
            <div><h4>{cuisines.join(',')}</h4></div>
            <div><h4>{costForTwoMessage}</h4></div>
            <div>Menu</div>
            <ul>
            {itemCards.map(items =><li key={items.card.info.id}>{items.card.info.name} -{items.card.info.price/100} Rupees </li>)}
            </ul>
        </div>
    )

}
export default RestroMenu;