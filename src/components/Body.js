import RestroCards from "./RetroCards";
import restroCards from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
         const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.88140&lng=76.58500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

         const json = await data.json();
         const restaurants = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
         setItems(restaurants);
         setInitial(restaurants);
    }

    const handleSearch = () => {
        const filteredData = initial.filter(element => element.info.name.toLowerCase().includes(search.toLowerCase()));
        console.log(filteredData);
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
                    items.map((item) => <RestroCards  key={item.info.id} restroData={item}/>)
                }
            </div>
        </div>
    )
}
export default Body;