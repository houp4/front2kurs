import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import CarsGrid from '../components/CarsGrid';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <CssBaseline />
      <Navbar active="1" />
      <MainContent />
      <CarsGrid />
      <Footer />
    </>
  );
}

export default Main;