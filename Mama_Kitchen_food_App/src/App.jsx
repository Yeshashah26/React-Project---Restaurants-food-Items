import { Outlet } from "react-router-dom";
import { useRestaurants } from "./api/RestaurantProvider";
import Header from "./component/common/Header";
import Shimmer_home_page from "./component/common/Shimmer_home_page"
import '../styles/styles.css'

const App = () => {
  const { loading, error } = useRestaurants(); 
  if (loading) {
    return <Shimmer_home_page />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => useRestaurants().refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />  
      <main>
        <Outlet /> 
      </main>
      
    </div>
  );
};

export default App;