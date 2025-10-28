import imageUrl from "../../utilitise/imageUrl.js";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    areaName,
  } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

    return (
    <div
      key={id}
      className="bg-white shadow-xl hover:shadow-md rounded-2xl hover:-translate-y-1 transition duration-300 border border-gray-100">
      {/* Card Image */}
      <img src={imageUrl + cloudinaryImageId} alt={name} className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1 font-medium text-yellow-600">
            ⭐ {avgRating || "N/A"}
          </span>
          <span className="font-semibold text-gray-800">{costForTwo}</span>
        </div>

        <p className="text-sm text-gray-500 truncate">
          {cuisines?.join(", ") || "Various cuisines"}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{deliveryTime} min delivery</span>
          <span>{areaName}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
