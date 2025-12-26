import { useEffect, useState } from "react"

const MenuCard = ({ item }) => {
    // const {id, name, price} = menuData.categories.items;
    return(
        <>
             <div className="p-4 border rounded-lg shadow-sm flex justify-between">
      <div>
        <h3 className="font-semibold text-lg">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600">
          ₹{item.price}
        </p>

        <p className="text-sm text-gray-500">
          {item.id}
        </p>
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>

        </>
    )
}

export default MenuCard;