import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.6610906&lng=76.37530459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);

    setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filterRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurants(filterRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
