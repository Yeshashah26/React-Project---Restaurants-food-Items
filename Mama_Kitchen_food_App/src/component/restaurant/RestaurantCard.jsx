import urlList from "../utilitise/url.js"

const RestaurantCard = (props) => {
    const {resData} = props;
    const { id, name, avgRating, cuisines, costForTwo, cloudinaryImageId,areaName} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
        <>
        { 
            <div className="res-card" key={id}>
                <img src={urlList+cloudinaryImageId} id="card-img" alt="image"/>
                <div className="res-card-content">
                    <h3 className="card-title">{name}</h3>
                    <div className="rating">{avgRating} stars</div>
                    <div className="cusinies">{cuisines?.join(",")} </div>
                    <div className="cost-for-two">{costForTwo}</div>
                    <div className="delivery-time">{deliveryTime} minutes</div>
                    <div className="location">{areaName}</div>
                </div>
             </div>
        }
    </>)
}

export default RestaurantCard;