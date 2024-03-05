import RestroCards from "./RetroCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { REST_ITEMS } from "../utils/env";
import { Link } from "react-router-dom";

const Body = () => {
    const [items,setItems]= useState([]);
    const [initial, setInitial] = useState([]);
    const [search,setSearch] = useState("");

    updateUI = () => {
        setItems(initial.filter(item=>item.info.avgRating > 4.5));
    }

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
         const data = await fetch(REST_ITEMS)

         const json = await data.json();
         const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
         setItems(restaurants);
         setInitial(restaurants);
    }

    const handleSearch = () => {
        const filteredData = initial.filter(element => element.info.name.toLowerCase().includes(search.toLowerCase()));
        setItems(filteredData);
    }
    return items.length === 0 ? <Shimmer/> :
     (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search}></input>
                    <button onClick={handleSearch }>Search</button>
                </div>
                <div>
                <button onClick={updateUI}>Filter 4.5 stars</button>
                </div>
            </div>
            <div className='hotels'>
                {
                    items.map((item) => <Link to={"/restaurant/"+item.info.id}  key={item.info.id}><RestroCards restroData={item}/></Link>)
                }
            </div>
        </div>
    )
}
export default Body;