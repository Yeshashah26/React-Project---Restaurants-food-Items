import { useEffect, useState } from "react"

const MenuCard = ({ item }) => { 
    const {name, price} = item?.items?.[0];
    const Add = () => {
      window.location.href = "/cart";
    }
    return(
        <>
        <div className="ml-80 ">
            <div className="p-4 max-w-4xl border border-gray-300 rounded-lg flex justify-between hover:-translate-y-1 transition duration-300 border border-gray-500 cursor-pointer">
            <div>
              <h3 className="font-semibold text-lg">
                {name}
                {/* {id} */}
              </h3>
          
              <p className="text-sm text-gray-600">
                ₹{price}
              </p>
            </div>

            <button className="bg-yellow-600 text-white px-4 py-2 rounded" onClick={Add}>
              Add To Cart
            </button>
          </div>
          <br></br>
        </div>
          
        </>
    )
}

export default MenuCard;