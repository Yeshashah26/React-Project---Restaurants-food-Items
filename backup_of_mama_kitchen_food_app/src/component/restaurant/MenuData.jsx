const MenuData = (menu) =>{
    const menuData = {menu};
    const {name} = menu?.card?.info;
    return(<div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Pav-Bhaji</li>
                <li>Pani-Puri</li>
            </ul>
        </div>)
}
export default MenuData;