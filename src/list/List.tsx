import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarsGrid from "./components/CarsGrid";

function List() {
  return (
    <div>
      <Navbar active="2" />
      <CarsGrid />
      <Footer />
    </div>
  );
}

export default List;