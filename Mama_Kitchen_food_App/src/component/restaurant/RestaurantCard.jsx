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
      <img src={imageUrl + cloudinaryImageId} alt={name} className="w-full col-4 md:w-full md:col-3 sm:w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Card Content */}
      <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow hover:shadow-md transition duration-300">
  {/* --- Restaurant Name --- */}
  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-snug truncate">
    {name}
  </h3>

  {/* --- Rating & Price --- */}
  <div className="flex flex-wrap items-center justify-between mt-2 text-sm text-gray-600">
    <span className="flex items-center gap-1 font-medium text-yellow-600">
      ⭐ {avgRating || "N/A"}
    </span>
    <span className="font-semibold text-gray-800">{costForTwo}</span>
  </div>

  {/* --- Cuisines --- */}
  <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-tight truncate">
    {cuisines?.join(", ") || "Various cuisines"}
  </p>

  {/* --- Delivery Time & Area --- */}
  <div className="flex flex-wrap justify-between items-center mt-3 text-xs sm:text-sm text-gray-500">
    <span>{deliveryTime} min delivery</span>
    <span className="truncate max-w-[150px] text-right">{areaName}</span>
  </div>
</div>

    </div>
  );
};

export default RestaurantCard;
