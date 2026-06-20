import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClubsListGrid from './components/ClubsListGrid';

function List() {
  return (
    <div>
      <Navbar active="2" />
      <ClubsListGrid />
      <Footer />
    </div>
  );
}

export default List;